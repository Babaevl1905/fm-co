document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les liens du menu
    const menuLinks = document.querySelectorAll("header nav ul li a");

    // Ajoute un événement 'click' pour chaque lien
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Empêche le comportement par défaut du lien (défilement normal)
            e.preventDefault();
            
            // Récupère l'ID de la section cible à partir de l'attribut href
            const targetId = link.getAttribute("href").substring(1); // Supprime le # du href
            const targetElement = document.getElementById(targetId);

            // Si la section cible existe
            if (targetElement) {
                // Fait défiler la page en douceur jusqu'à la section
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

