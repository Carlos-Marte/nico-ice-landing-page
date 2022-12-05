const menuIcon = document.querySelector(".header__icon");

menuIcon.addEventListener('click', (e) => {
    let imgSrc = menuIcon.getAttribute("src");
    let lista = menuIcon.nextElementSibling;

    if(imgSrc === "./assets/image/menu.svg") {
        menuIcon.setAttribute("src", "./assets/image/menu-close.svg")
        lista.classList.toggle("list--menu-show");
    } else {
        menuIcon.setAttribute("src", "./assets/image/menu.svg")
        lista.classList.toggle("list--menu-show");
    }
});