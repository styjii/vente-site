// ---------------------- head --------------------------
// word typing
const wordType = document.querySelector(".wordType")
const cursor = document.querySelector(".cursor")

let wordArrayIndex = 0
let charIndex = 0
const typingDelay = 200
const erasingDelay = 100
const newWordDelay = 2000


const wordArray = [
    "T-shirt",
    "Blousons",
    "Chaussures",
    "Patalons"
]
const type = () => {
    if (charIndex < wordArray[wordArrayIndex].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
        wordType.textContent += wordArray[wordArrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
    } else {
        cursor.classList.remove("typing")
        setTimeout(erase, newWordDelay)
    }
}
const erase = () => {
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
        wordType.textContent = wordArray[wordArrayIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, erasingDelay)
    } else {
        cursor.classList.remove("typing")
        wordArrayIndex++
        if (wordArrayIndex >= wordArray.length) {
            wordArrayIndex = 0
        }
        setTimeout(type, typingDelay + 1100)
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (wordArray.length) {
        setTimeout(type, newWordDelay + 250)
    }
})

// background animation
const bg = document.querySelector(".background img")
const chemin = `${document.querySelector("#logo img").src}/../head-background/`
let i = 1
function backgroundChange() {
    bg.src = `${chemin}bg-${i}.jpg`
    i >= 6 ? i = 1 : i++
}
setInterval(backgroundChange, 10000)

// ---------------------- search ---------------------------
const btn_search = document.getElementById("btn-search")
const search = document.getElementById("search")

function clickBtn() {
    if (search.value == "T-shirt" || search.value == "T-Shirt" || search.value == "t-shirt" || search.value == "T-SHIRT") {
        location.href = `${document.querySelectorAll(".navlink a")[2].href}#T-shirt`
    }
    else if (search.value == "Blousons" || search.value == "blousons" || search.value == "BLOUSONS") {
        location.href = `${document.querySelectorAll(".navlink a")[2].href}#Blousons`
    }
    else if (search.value == "Chaussures" || search.value == "chaussures" || search.value == "CHAUSSURES") {
        location.href = `${document.querySelectorAll(".navlink a")[2].href}#Chaussures`
    }
    else if (search.value == "Patalons" || search.value == "patalons" || search.value == "PATALONS") {
        location.href = `${document.querySelectorAll(".navlink a")[2].href}#Patalons`
    }
    else {
        alert("Aucun dans notre site !")
        location.href = document.querySelector(".navlink a")
    }
}
search.addEventListener("keypress", e => {
    if (e.key === "Enter"){
        clickBtn()
    }
})
btn_search.addEventListener("click", clickBtn)

// ---------------------- card ---------------------------
const image = document.querySelectorAll('img[alt="x-card"]')
const card = document.querySelectorAll('.card')
const btnStar = document.querySelectorAll('.btn-star')


for (let i = 0; i < card.length; i++){
    image[i].addEventListener("mouseover", e => {
        image[i].style.transition = 'all .5s ease'
        card[i].style.backgroundColor = "#4941c5"
        card[i].style.transition = "all .5s ease"
    })
    image[i].addEventListener("mouseout", () => {
        card[i].style.backgroundColor = "#3d0e0e"
    })
    btnStar[i].addEventListener('click', e => {
        btnStar[i].childNodes[1].classList.toggle('bi-star')
        btnStar[i].childNodes[1].classList.toggle('bi-star-fill')
    })
}