// Selecciona el botón toggle y el menú
const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Agrega un evento al botón
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("show"); // Activa o desactiva la clase 'show'
});







//llevar hasta la seccion 
// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll(".menu-container > ol > li > a");

// Agrega un evento de clic a cada enlace
menuLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = link.getAttribute("href").substring(1); // Obtiene el ID de destino
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave usando scrollIntoView
        targetElement.scrollIntoView({
            behavior: "smooth", // Suavidad en el desplazamiento
            block: "start" // Alinea la sección al inicio de la pantalla
        });

        // Cierra el menú en móvil (si está abierto)
        const menu = document.querySelector(".menu-container > ol");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    });
});
