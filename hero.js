const links = document.querySelectorAll('.nav-right a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// pour faire passer les options d'un coté à l'autre
  function Panel() {
    const panel = document.getElementById("Panel");
    panel.classList.toggle("active");
  }

    function ajouterJeu(nom, image, description) {
    const container = document.getElementById("maSelection");

    // Crée un nouvel élément de jeu
    const div = document.createElement("div");
    div.className = "jeu-card";
    div.innerHTML = `
      <img src="${image}" alt="${nom}">
      <div class="jeu-info">
        <h3>${nom}</h3>
        <p>${description}</p>
      </div>
    `;

    container.appendChild(div);
  
    let jeux = JSON.parse(localStorage.getItem("jeux")) || [];
  if (!jeux.some(j => j.nom === nom)) {
    jeux.push({ nom, image, description });
    localStorage.setItem("jeux", JSON.stringify(jeux));
  }
}
window.addEventListener("DOMContentLoaded", () => {
  const jeux = JSON.parse(localStorage.getItem("jeux")) || [];
  jeux.forEach(j => ajouterJeu(j.nom, j.image, j.description));
});

