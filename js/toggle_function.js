function toggleInfo(sectionId) {
    var infoContainer = document.querySelector(`#${sectionId} #infoContainer`);
    var toggleIcon = document.querySelector(`#${sectionId} h2 span`);
    
    if (infoContainer.style.display === 'none' || infoContainer.style.display === '') {
        infoContainer.style.display = 'flex';
        toggleIcon.textContent = '-';
    } else {
        infoContainer.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}
function toggleInfo1(sectionId) {
    var infoContainer = document.querySelector(`#${sectionId} #infoContainer`);
    var toggleIcon = document.querySelector(`#${sectionId} h2 span`);
    
    if (infoContainer.style.display === 'none' || infoContainer.style.display === '') {
        infoContainer.style.display = 'block';
        toggleIcon.textContent = '-';
    } else {
        infoContainer.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}
function toggleSubsection(subsectionId) {
    var subsectionInfo = document.querySelector(`#${subsectionId}`);
    var toggleIcon = subsectionInfo.previousElementSibling.querySelector('span'); // Buscar el span en el h3 anterior

    if (subsectionInfo.style.display === 'none' || subsectionInfo.style.display === '') {
        subsectionInfo.style.display = 'flex';
        toggleIcon.textContent = '-';
    } else {
        subsectionInfo.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}
// Añadimos eventos a los h3 de subsecciones
document.querySelectorAll('#section2 .sector h3').forEach(function(header) {
    header.addEventListener('click', function() {
        var id = this.nextElementSibling.id;
        toggleSubsection(id);
    });
});

// Animaciones
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("section-visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);

    // Ejecutamos la función al cargar la página para mostrar las secciones visibles inicialmente
    checkVisibility();
});