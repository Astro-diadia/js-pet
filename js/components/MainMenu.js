const headerBurgerBtn = document.querySelector('.header__catalog-btn')
const mainMenu = document.querySelector('.main-menu')
const mainMenuClose = document.querySelector('.main-menu__close')

mainMenuClose.addEventListener("click", (e) => {
    mainMenu.classList.toggle("main-menu--active")
})

headerBurgerBtn.addEventListener("click", (e) => {
    mainMenu.classList.toggle("main-menu--active")
})
