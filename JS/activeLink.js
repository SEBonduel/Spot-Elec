var currentUrl = window.location.href;

// Trouver tous les liens de la navbar
var navLinks = document.querySelectorAll('.nav-link');

// Parcourir tous les liens
navLinks.forEach(function(link) {
    // Vérifier si l'URL du lien correspond à l'URL de la page actuelle
    if (link.href === currentUrl) {
        // Ajouter la classe "active" au lien correspondant à la page actuelle
        link.classList.add('active');
    }
});
