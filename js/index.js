
const menuButton = document.getElementById("menu-btn")
const overlay = document.querySelector('.overlay')
const sideMenu = document.getElementById("mobile-menu")
const counters = document.querySelectorAll(".counter")
let scrollStarted = false

document.addEventListener("scroll", scrollPage)

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('open')

    overlay.classList.toggle('overlay-show')

    document.body.classList.toggle('stop-scrolling')

    sideMenu.classList.toggle('show-menu')
})


// Counting

function scrollPage() {
    const scrollPos = window.scrollY

    if (scrollPos > 100 && !scrollStarted) {
        CountUp()
        scrollStarted = true 
    } else if (scrollPos < 100 && !scrollStarted) {
        reset()
        scrollStarted = false
    }
}

function CountUp() {
    counters.forEach((counter) => {
        counter.innerText = '0'

        const updateCounter = () => {
            // get count target
            const target = +counter.getAttribute('data-target')
            // get current counter value
            const c = +counter.innerText

            // create in increment
            const increment = target / 100

            // IF counter is Less than target, add increment
            if(c < target) {
                //Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter, 75)
            } else {
                counter.innerText = target
            }
        }

        updateCounter()
    })
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'))
}