let airpodsTitle = document.querySelector(".airpods__title")
let fullText = airpodsTitle.innerHTML
let stop = 0

airpodsTitle.innerHTML = ""

function runText(x = 0) {
    airpodsTitle.innerHTML += fullText[x]
    x++

    stop = setTimeout(() => {
        runText(x)
    }, 200);

    if (x == 11) {
        clearTimeout(stop)
        airpodsTitle.classList.add("active")
    }

}

runText()

let left = document.querySelector(".left")
let section2Txt = document.querySelector(".section__2")
let section3Txt = document.querySelector(".section__3")
let section4 = document.querySelector(".section4")
let section4Box = document.querySelectorAll(".section4__box")



window.addEventListener("scroll", () => {
    fadeRight(left, 2)
    fadeRight(section2Txt, 2)
    fadeRight(section3Txt, 2)
    fadeRight(section4, 2)
    fadeRight(section4Box, 4)
})

function fadeRight(section, coordinate) {
    let fadeRight = section.querySelectorAll(".fade-right")

    for (let i = 0; i < fadeRight.length; i++) {

        const speed = fadeRight[i].getAttribute("data-speed")

        fadeRight[i].style.transition = speed + "ms"

        if (this.scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
            fadeRight[i].classList.add("active")
        } else {
            fadeRight[i].classList.remove("active")
        }
    }
}
fadeRight()