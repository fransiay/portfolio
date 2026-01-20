const container = document.getElementById("fireflies");

const TOTAL = 130; // nombre total de lucioles

for (let i = 0; i < TOTAL; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");

    // PROFONDEUR : far (0), mid (1), close (2)
    const depth = Math.random();

    let scale, blur, speed, z;

    if (depth < 0.45) {                  // lucioles très lointaines
        scale = Math.random() * 0.3 + 0.2;
        blur = "2px";
        speed = (Math.random() * 8 + 8) + "s";
        z = 0;
    }
    else if (depth < 0.8) {              // profondeur moyenne
        scale = Math.random() * 0.5 + 0.5;
        blur = "1px";
        speed = (Math.random() * 5 + 5) + "s";
        z = 0;
    }
    else {                               // très proches, effet bokeh
        scale = Math.random() * 0.8 + 1;
        blur = "4px";
        speed = (Math.random() * 4 + 3) + "s";
        z = 0; // passe devant le texte
    }

    // Position initiale
    f.style.top = Math.random() * 100 + "vh";
    f.style.left = Math.random() * 100 + "vw";

    // Taille selon profondeur
    const size = (Math.random() * 8 + 6) * scale;
    f.style.width = size + "px";
    f.style.height = size + "px";

    // Effet flou pour profondeur
    f.style.filter = `blur(${blur})`;

    // Z-index
    f.style.zIndex = z;

    // Durée des animations
    f.style.animationDuration = speed + ", " + (Math.random() * 2 + 1) + "s";
    f.style.animationDelay = (Math.random() * 5) + "s";

    container.appendChild(f);
}
