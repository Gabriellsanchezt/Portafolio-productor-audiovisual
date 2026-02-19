// ---------------------------------------------------------- Animaciones de inicio --------------------------------------

let tl = gsap.timeline();

tl.from(".start-animation", {
    duration: 0.5,
    y: -50,
    scale: 0,
    stagger: 0.1,
    delay: 0.1,
});

tl.from(".start-animation2", {
    duration: 0.5,
    y: 10,
    scale: 0,
    stagger: 0.1,
    delay: 0.1,
}, "+=0.1");

// -------------------------------------------------------- Animaciones al hacer scroll ------------------------------------------

gsap.registerPlugin(ScrollTrigger);

gsap.from(".elemento1", {
    scrollTrigger: ".elemento1",
    start: "top center",
    duration: 0.5,
    y: 10,
    scale: 0,
});

gsap.to(".elemento2", {
    scrollTrigger: ".elemento2",
    start: "top center",
    delay: 0.3,
    opacity: 1,
});

gsap.to(".elemento3", {
    scrollTrigger: ".elemento3",
    start: "top center",
    delay: 0.4,
    opacity: 1,
});

gsap.to(".elemento4", {
    scrollTrigger: ".elemento4",
    start: "top center",
    delay: 0.5,
    opacity: 1,
});

gsap.to(".elemento6", {
    scrollTrigger: ".elemento6",
    start: "top center",
    delay: 0.4,
    opacity: 1,
});

// ----------------------------------------------------------------- Menú activo al hacer scroll ----------------------------------------------

const secciones = document.querySelectorAll(".seccion");
const menuItems = document.querySelectorAll(".menu-item");

const funcionObserver = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const itemActual = Array.from(menuItems).find(
                (item) => item.dataset.url === entry.target.id
            );
            if (itemActual) {
                itemActual.classList.add("activo");
            }
            menuItems.forEach((item) => {
                if (item !== itemActual) {
                    item.classList.remove("activo");
                }
            });
        }
    });
};

const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
});

secciones.forEach((seccion) => observer.observe(seccion));

// ------------------------------------------- Quitar filtro de la foto de perfil al hacer clic (responsive) ------------------------------------------

const imagenPerfil = document.querySelector("#foto-perfil");
if (imagenPerfil) {
    imagenPerfil.addEventListener("click", () => {
        imagenPerfil.classList.remove("filtro");
    });
}
