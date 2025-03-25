document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header_burger");
    const menu = document.querySelector(".header__wrapper");
    const links = document.querySelectorAll('.main-menu__item-link, .btn'); 
    const elementsToToggle = document.querySelectorAll(".header_burger, .header, .header__wrapper, body");

    // Открытие/закрытие меню при клике на бургер
    burger.addEventListener("click", function () {
        elementsToToggle.forEach(el => el.classList.toggle("active"));
    });

    // Закрытие меню при клике на ссылку
    links.forEach(link => {
        link.addEventListener("click", function () {
            elementsToToggle.forEach(el => el.classList.remove("active"));
        });
    });
});


