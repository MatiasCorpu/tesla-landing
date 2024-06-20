//FUNCION PARA CAMBIAR LOOS COLORES DEL HEADER

// const observerOptions = {
//     root: null, //defaolts to viewport
//     rootMargin: '0px', // en cuanto se vea el elemento
//     threshold: 0.5 // porcentaje de visibilidad
// };

// const header = document.querySelector("#landing-header");
// let color = null;

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const { isIntersecting } = entry
//         if (isIntersecting) {
//             color = entry.target.getAttribute('data-header-color')
//             // console.log(color)
//             header.style.color = color;
//         }
//     })
// }, observerOptions);

// const sections = document.querySelectorAll(".landing-section");
// sections.forEach(section => observer.observe(section));

//---------------------------------------------------------------------------------------------------------------------

//FUNCIONES -> width < 1200px 

let menuNavContainer = document.getElementById("nav-container");
let openMenuNav = document.getElementById("open-menu-nav");
let closeMenuNav = document.getElementById("close-menu-botton");
let backButton = document.getElementById("back-container-img");
let buttonsNav = document.getElementsByClassName("buton-nav");
let sectionInsertName = document.getElementById("name-button-nav");
let menuSibling = document.getElementsByClassName("menu")[0]; //inicialmente para que no tenga valor null


function clickOpenMenu() {
    menuNavContainer.style.display = "block";
    // header.style.color = "#000";
    clickBackInMenu();
}

function clickCloseMenu() {
    menuNavContainer.style.display = "none";
    // header.style.color = color;
    openMenuNav.style.display = "flex";
}

function clickButonNav(event) {
    button = event.target;

    if (!button.classList.contains('arrow-right')) {
        button = button.closest('button');
    }

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
    openMenuNav.addEventListener("click", clickOpenMenu);
    closeMenuNav.addEventListener("click", clickCloseMenu);

    for (var i = 0; i < buttonsNav.length - 3; i++) {
        buttonsNav[i].addEventListener("click", clickButonNav);
    }

    backButton.addEventListener("click", clickBackInMenu);
}

//---------------------------------------------------------------------------------------------------------------------
function removeEventListeners() {
    openMenuNav.removeEventListener("click", clickOpenMenu);
    closeMenuNav.removeEventListener("click", clickCloseMenu);
    for (var i = 0; i < buttonsNav.length; i++) {
        buttonsNav[i].removeEventListener("click", clickButonNav);
    }
    backButton.removeEventListener("click", clickBackInMenu);
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


//OCULTAR SCROLL CUANDO SE LE HACE HOVER A UN BOTON (>1200px)

const mainContainer = document.querySelector('main');
const menus = document.getElementsByClassName("menu");


function hiddenScrollYMain() {
    mainContainer.style.overflowY = "hidden";
    mainContainer.style.filter = "blur(5px)";
    // header.style.color = "#000";
}

function scrollYMain() {
    mainContainer.style.overflowY = "scroll";
    mainContainer.style.filter = "blur(0px)";
    // header.style.color = color;
}

document.addEventListener("DOMContentLoaded", function () {

    // Verificar el ancho de la ventana al cargar el DOM
    if (window.innerWidth < 1200) {
        setupEventListeners();

    } else {
        removeEventListeners();

        if (buttonsNav) {
            for (var i = 0; i < buttonsNav.length - 3; i++) {
                buttonsNav[i].addEventListener("mouseenter", hiddenScrollYMain);
                buttonsNav[i].addEventListener("mouseleave", scrollYMain);
                menus[i].addEventListener("mouseenter", hiddenScrollYMain);
                menus[i].addEventListener("mouseleave", scrollYMain);
            }
        }
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

//---------------------------------------------------------------------------------------------------------------------
//estilo del nav-menu cuando se hace hover en el manu

// Selecciona todos los elementos .buton-nav y .menu dentro de .ul-nav-menu > li
document.querySelectorAll('.ul-nav-menu > li').forEach(function (item) {
    const button = item.querySelector('.buton-nav');
    const menu = item.querySelector('.menu');

    // Agrega evento de mouseenter al menú para agregar la clase 'hovered' al botón
    menu.addEventListener('mouseenter', function () {
        button.classList.add('hovered');
    });

    // Agrega evento de mouseleave al menú para quitar la clase 'hovered' del botón
    menu.addEventListener('mouseleave', function () {
        button.classList.remove('hovered');
    });


});
