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
// Listener para el enlace en el navbar de la seccion 1
function toggleAndScroll(sectionId) {
    toggleInfo(sectionId);  // Despliega o contrae la información
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });  // Redirige a la sección
}

// seccion 2
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

// Listener para el enlace en el navbar de la seccion 2
function toggleAndScroll1(sectionId) {
    toggleInfo1(sectionId);  // Despliega o contrae la información
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });  // Redirige a la sección
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

// Deteccion de dispositivo
// Detecta si el usuario está en un dispositivo móvil
if (/Mobi|Android/i.test(navigator.userAgent)) {
    alert("Esta página contiene gráficos interactivos, datos e información dińamica que se encuentra optimizada exclusivamente para escritorio. Te recomendamos visitar el sitio desde un ordenador para una mejor experiencia. Nos encontramos trabajando para que pueda verse de la misma forma desde el celular. Sepan disculpar");
}