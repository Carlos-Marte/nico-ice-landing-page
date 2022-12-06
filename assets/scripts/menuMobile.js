const menuIcon = document.querySelector(".header__icon");
const lista = menuIcon.nextElementSibling;
const links = document.querySelectorAll(".list__link--menu");

// Cambiar menú
const cambiarImg = (imgSrc) => {
    if(imgSrc === "./assets/image/menu.svg") {
        menuIcon.setAttribute("src", "./assets/image/menu-close.svg")
        lista.classList.toggle("list--menu-show");
        return document.body.style.overflowY = "hidden";
    }

    menuIcon.setAttribute("src", "./assets/image/menu.svg")
    lista.classList.toggle("list--menu-show");
    document.body.style.overflowY = "scroll";
    return document.body.style.overflowY = "scroll";
}

// Cerrar menú al darle click a los links
const cerrarMenu = () => {
    let imgSrc = menuIcon.getAttribute("src");
    
    cambiarImg(imgSrc);
}

menuIcon.addEventListener('click', () => {
    let imgSrc = menuIcon.getAttribute("src");

    cambiarImg(imgSrc);
});

links.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(cerrarMenu, 500);
    });
});