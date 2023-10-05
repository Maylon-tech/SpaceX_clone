
const menuButton = document.getElementById("menu-btn")
const overlay = document.querySelector('.overlay')
const sideMenu = document.getElementById("mobile-menu")



menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('open')

    overlay.classList.toggle('overlay-show')

    document.body.classList.toggle('stop-scrolling')

    sideMenu.classList.toggle('show-menu')
})