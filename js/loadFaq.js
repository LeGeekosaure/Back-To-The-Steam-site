import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadFAQ() {
  const faqContainer = document.getElementById("faq-container");
  faqContainer.innerHTML = "<p>Chargement...</p>";

  const faqCollection = collection(db, "faq");
  const snapshot = await getDocs(faqCollection);

  faqContainer.innerHTML = "";

  snapshot.forEach(doc => {
    const data = doc.data();

    const item = document.createElement("div");
    item.classList.add("faq-item");
    item.style.marginBottom = "20px";
    item.style.padding = "15px";
    item.style.borderLeft = "4px solid #2563eb";
    item.style.background = "#fff";

    item.innerHTML = `
      <h3 style="margin:0 0 5px 0">${data.question}</h3>
      <p style="color:#2563eb; font-size:14px; margin:0 0 10px 0;">${data.catégorie}</p>
      <p style="margin:0; color:#444;">${data.réponse}</p>
    `;

    faqContainer.appendChild(item);
  });
}

loadFAQ();
