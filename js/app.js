// Supprime le smooth scroll CSS si jamais il est encore appliqué
document.documentElement.style.scrollBehavior = 'auto';

// Sélectionne tous les liens qui pointent vers une ancre (#quelquechose)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = this.getAttribute('href'); // ex: "#section1"
    const target = document.querySelector(targetId);

    if (target) {
      const targetPosition = target.offsetTop;

      // Scroll vers l'élément de façon fluide
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Mets 'auto' si tu veux enlever toute animation
      });
    }
  });
});
