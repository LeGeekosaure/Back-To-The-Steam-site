import { db, auth } from "../js/firebase.js";
import {
  collection,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const allowedAdmins = [
  "manon.wagner.marschall@gmail.com",
  "enzolombard1306@gmail.com",
  "alexandre.schoettel538@gmail.com",
  "back.to.the.steam.1990@gmail.com"
];

// --- CHECK ADMIN ACCESS ---
onAuthStateChanged(auth, user => {
  if (!user || !allowedAdmins.includes(user.email)) {
    alert("Accès refusé !");
    window.location.href = "../html/faq.html";
  }
});

const tableBody = document.getElementById("faq-table-body");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalQuestion = document.getElementById("modal-question");
const modalAnswer = document.getElementById("modal-answer");
const modalCategory = document.getElementById("modal-category");
const modalSave = document.getElementById("modal-save");
const modalClose = document.getElementById("modal-close");
const addBtn = document.getElementById("add-btn");

let currentID = null;

// --- LOGOUT BTN ---
const logoutBtn = document.createElement("button");
logoutBtn.textContent = "Se déconnecter";
logoutBtn.classList.add("logout-btn");
document.querySelector(".admin-container").prepend(logoutBtn);

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "../html/faq.html";
});

// ----------------------------
//  🔥 LOAD FAQ FOR ADMIN
// ----------------------------
async function loadAdminFAQ() {
  tableBody.innerHTML = "<tr><td colspan='4'>Chargement...</td></tr>";

  const snap = await getDocs(collection(db, "faq"));

  tableBody.innerHTML = "";

  console.log("DEBUG → Nombre de docs FAQ :", snap.size);

  const sorted = [];
  const others = [];

  snap.forEach(docSnap => {
    const data = docSnap.data();
    data.id = docSnap.id;

    // 🔥 NORMALISATION (fix principal)
    data.catégorie = data.catégorie || data.category || "";
    data.réponse = data.réponse || data.answer || "En attente de réponse...";

    if (!data.réponse || data.réponse === "En attente de réponse...") sorted.push(data);
    else others.push(data);
  });

  const finalList = [...sorted, ...others];

  if (finalList.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='4'>Aucune question trouvée</td></tr>";
    return;
  }

  finalList.forEach(data => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${data.question}</td>
      <td>${data.catégorie}</td>
      <td>${data.réponse}</td>
      <td>
        <button class="action-btn btn-edit" data-id="${data.id}">Modifier</button>
        <button class="action-btn btn-delete" data-id="${data.id}">Supprimer</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  addEvents();
}

// ----------------------------
//  ACTION BUTTONS
// ----------------------------
function addEvents() {
  document.querySelectorAll(".btn-edit").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });

  document.querySelectorAll(".btn-delete").forEach(btn => {
    btn.addEventListener("click", () => removeFAQ(btn.dataset.id));
  });
}

// ----------------------------
//  MODAL OPEN
// ----------------------------
async function openModal(id) {
  currentID = id;

  const snap = await getDocs(collection(db, "faq"));
  const data = snap.docs.find(d => d.id === id).data();

  // normalisation
  modalQuestion.value = data.question;
  modalAnswer.value = data.réponse || data.answer || "En attente de réponse...";
  modalCategory.value = data.catégorie || data.category || "Projet";

  modal.classList.remove("hidden");
}

// ----------------------------
//  MODAL SAVE
// ----------------------------
modalSave.addEventListener("click", async () => {
  if (!currentID) return;

  const ref = doc(db, "faq", currentID);

  await updateDoc(ref, {
    question: modalQuestion.value,
    réponse: modalAnswer.value,
    catégorie: modalCategory.value
  });

  modal.classList.add("hidden");
  loadAdminFAQ();
});

// ----------------------------
//  DELETE FAQ
// ----------------------------
async function removeFAQ(id) {
  if (!confirm("Supprimer cette question ?")) return;

  await deleteDoc(doc(db, "faq", id));
  loadAdminFAQ();
}

// ----------------------------
//  ADD NEW QUESTION
// ----------------------------
addBtn.addEventListener("click", async () => {
  const docRef = await addDoc(collection(db, "faq"), {
    question: "Nouvelle question",
    réponse: "En attente de réponse...",
    catégorie: "Projet"
  });

  loadAdminFAQ();
});

// ----------------------------
//  CLOSE MODAL
// ----------------------------
modalClose.addEventListener("click", () => modal.classList.add("hidden"));

// ----------------------------
//  INITIAL LOAD
// ----------------------------
loadAdminFAQ();
