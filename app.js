/*
FUNCION PARA CAMBIAR LOOS COLORES DEL HEADER

const observerOptions = {
    root: null, //defaolts to viewport
    rootMargin: '0px', // en cuanto se vea el elemento
    threshold: 0.5 // porcentaje de visibilidad
};

const header = document.querySelector("#landing-header");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            const color = entry.target.getAttribute('data-header-color')
            console.log(color)
            header.style.color = color
        }
    })
}, observerOptions);

const sections = document.querySelectorAll(".landing-section");
sections.forEach(section => observer.observe(section));

*/

/////////funcion para cuando le das click y se habre el menu

let menuNavContainer = document.getElementById("nav-container");
let openMenuNav = document.getElementById("open-menu-nav");
let closeMenuNav = document.getElementById("close-menu-botton");
let backButton = document.getElementById("back-container-img");
let buttonsNav = document.getElementsByClassName("buton-nav");
let sectionInsertName = document.getElementById("name-button-nav");
let menuSibling = null;


function clickOpenMenu() {
    menuNavContainer.style.display = "block";
    clickBackInMenu();
}

function clickCloseMenu() {
    menuNavContainer.style.display = "none";
    openMenuNav.style.display = "flex";
}

function clickButonNav(event) {
    button = event.target;

    menuSibling = button.nextElementSibling;
    menuSibling.style.display = "block";

    sectionInsertName.textContent = button.textContent;

    backButton.style.display = "block";
}

function clickBackInMenu() {
    backButton.style.display = "none";
    menuSibling.style.display = "";
    sectionInsertName.textContent = "";
}

function setupEventListeners() {

    if (openMenuNav) {
        openMenuNav.addEventListener("click", clickOpenMenu);
    }

    if (closeMenuNav) {
        closeMenuNav.addEventListener("click", clickCloseMenu);
    }

    if (buttonsNav) {
        for (var i = 0; i < buttonsNav.length; i++) {
            buttonsNav[i].addEventListener("click", clickButonNav);
        }
    }

    if (backButton) {
        backButton.addEventListener("click", clickBackInMenu);
    }
}

function removeEventListeners() {

    if (openMenuNav) {
        openMenuNav.removeEventListener("click", clickOpenMenu);
    }

    if (closeMenuNav) {
        closeMenuNav.removeEventListener("click", clickCloseMenu);
    }

    if (buttonsNav) {
        for (var i = 0; i < buttonsNav.length; i++) {
            buttonsNav[i].removeEventListener("click", clickButonNav);
        }
    }

    if (backButton) {
        backButton.removeEventListener("click", clickBackInMenu);
    }
}

function changeStatus() {
    menuNavContainer.style.display = "none";
    openMenuNav.style.display = "block"
}

function restorePreviousState() {
    menuNavContainer.style.display = "flex";
    openMenuNav.style.display = "none";
    menuSibling.style.display = "";
}

document.addEventListener("DOMContentLoaded", function () {

    // Verificar el ancho de la ventana al cargar el DOM
    if (window.innerWidth < 1200) {
        setupEventListeners();
    } else {
        removeEventListeners();
    }

    // Event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", function () {
        if (window.innerWidth < 1200) {
            setupEventListeners();
            changeStatus();
        } else {
            removeEventListeners();
            restorePreviousState();
        }
    });

});