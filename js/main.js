// ------------------------
// MAIN.JS COMPLET
// ------------------------
document.addEventListener("DOMContentLoaded", () => {

  // ------------------------
  // SCROLL TO WORKSHOP
  // ------------------------
  const scrollBtn = document.getElementById("scrollToWorkshop");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const workshopElement = document.getElementById("workshop");
      if (workshopElement) {
        const navHeight = 80;
        const targetPosition = workshopElement.offsetTop - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  }

  // ------------------------
  // LOAD NAV + BURGER MENU
  // ------------------------
  const navContainer = document.getElementById("navigation");
  if (navContainer) {
    fetch("../html/nav.html")
      .then(res => res.text())
      .then(html => {
        navContainer.innerHTML = html;

        // ---- BURGER MENU ----
        const burger = navContainer.querySelector(".burger");
        const mobileMenu = navContainer.querySelector(".mobile-menu");

        if (burger && mobileMenu) {
          burger.addEventListener("click", () => {
            mobileMenu.classList.toggle("show"); // CSS: .show -> display:flex / transform slide
            burger.classList.toggle("active");
          });

          // Fermer le menu mobile quand on clique sur un lien
          navContainer.querySelectorAll(".mobile-item").forEach(link => {
            link.addEventListener("click", () => {
              mobileMenu.classList.remove("show");
              burger.classList.remove("active");
            });
          });
        }
      })
      .catch(err => console.error("Erreur en chargeant la nav :", err));
  }

  // ------------------------
  // FEATURE CARDS (JSON)
  // ------------------------
  const featureContainer = document.querySelector(".feature-cards");
  if (featureContainer) {
    fetch("../data/featureCards.json")
      .then(res => res.json())
      .then(features => {
        features.forEach(feature => {
          const card = document.createElement("div");
          card.className = "feature-card";

          card.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
          `;

          featureContainer.appendChild(card);
        });
      })
      .catch(err => console.error("Erreur JSON featureCards :", err));
  }

  // ------------------------
  // TIMELINE PROGRESS (JSON)
  // ------------------------
  const timelineContainer = document.getElementById("timeline");
  const statAverage = document.getElementById("stat-average");
  const statCompleted = document.getElementById("stat-completed");
  const statInProgress = document.getElementById("stat-in-progress");
  const statTotal = document.getElementById("stat-total");

  if (timelineContainer) {
    fetch("../data/progressdata.json")
      .then(res => res.json())
      .then(data => {
        const items = data.timelineItems;

        // Stats
        const total = items.length;
        const completed = items.filter(i => i.pourcentage === 100).length;
        const inProgress = items.filter(i => i.pourcentage > 0 && i.pourcentage < 100).length;
        const avg = Math.round(items.reduce((sum, i) => sum + i.pourcentage, 0) / total);

        if (statAverage) statAverage.textContent = avg + "%";
        if (statCompleted) statCompleted.textContent = completed;
        if (statInProgress) statInProgress.textContent = inProgress;
        if (statTotal) statTotal.textContent = total;

        // Timeline Cards
        items.forEach(item => {
          let statusClass = item.pourcentage === 100 ? "completed" :
                            item.pourcentage > 0 ? "in-progress" : "upcoming";
          const icon = item.pourcentage === 100 ? "✔" :
                       item.pourcentage > 0 ? "⏳" : "○";

          const card = document.createElement("div");
          card.className = `timeline-item ${statusClass}`;
          card.innerHTML = `
            <div class="timeline-icon">${icon}</div>
            <div class="timeline-content">
              <div class="timeline-left">
                <h3>${item.titre}</h3>
                <span class="timeline-date">${item.date}</span>
                <p class="timeline-description">${item.description}</p>
                <div class="progress-bar">
                  <div class="progress-fill ${statusClass}" style="width:${item.pourcentage}%;"></div>
                </div>
              </div>
              <div class="timeline-right">
                <div class="timeline-percentage">${item.pourcentage}%</div>
                <span class="timeline-status ${statusClass}">
                  ${statusClass === "completed" ? "Complété" :
                    statusClass === "in-progress" ? "En cours" : "À venir"}
                </span>
              </div>
            </div>
          `;
          timelineContainer.appendChild(card);
        });
      })
      .catch(err => console.error("Erreur JSON timeline :", err));
  }

});
