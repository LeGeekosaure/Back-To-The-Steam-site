import { db, auth } from "../js/firebase.js";
import {
  collection,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const allowedAdmins = [
  "manon.wagner.marschall@gmail.com",
  "enzolombard1306@gmail.com",
  "alexandre.schoettel538@gmail.com"
];

onAuthStateChanged(auth, user => {
  if (!user || !allowedAdmins.includes(user.email)) {
    alert("Accès refusé !");
    window.location.href = "../html/faq.html";
  }
});

const tableBody = document.getElementById("faq-table-body");
const modal = document.getElementById("modal");
const logoutBtn = document.createElement("button");
logoutBtn.textContent = "Se déconnecter";
logoutBtn.style.marginBottom = "20px";
logoutBtn.style.padding = "10px 20px";
logoutBtn.style.cursor = "pointer";
logoutBtn.style.background = "#d9534f";
logoutBtn.style.color = "#fff";
document.querySelector(".admin-container").prepend(logoutBtn);

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "../html/faq.html";
});

// --- AUTH CHECK ---
onAuthStateChanged(auth, user => {
  if (!user) window.location.href = "login.html";
});

// --- LOAD DATA WITH PENDING FIRST ---
async function loadAdminFAQ() {
  tableBody.innerHTML = "<tr><td colspan='4'>Chargement...</td></tr>";

  const snap = await getDocs(collection(db, "faq"));
  tableBody.innerHTML = "";

  const sorted = [];
  const others = [];

  snap.forEach(docSnap => {
    const data = docSnap.data();
    data.id = docSnap.id;

    if (!data.réponse || data.réponse === "En attente de réponse...") sorted.push(data);
    else others.push(data);
  });

  const finalList = [...sorted, ...others]; // en attente en haut

  finalList.forEach(data => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${data.question}</td>
      <td>${data.catégorie || data.category}</td>
      <td>${data.réponse || "En attente de réponse..."}</td>
      <td>
        <button class="action-btn btn-edit" data-id="${data.id}">Modifier</button>
        <button class="action-btn btn-delete" data-id="${data.id}">Supprimer</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  addEvents();
}

// --- ACTIONS (edit / delete) ---
function addEvents() {
  document.querySelectorAll(".btn-edit").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });

  document.querySelectorAll(".btn-delete").forEach(btn => {
    btn.addEventListener("click", () => removeFAQ(btn.dataset.id));
  });
}

// --- rest same as before (openModal, save, delete, add) ---
