// ---------------------- card ---------------------------
const card = document.querySelectorAll('.card')
const btnStar = document.querySelectorAll('.btn-star')
const indiceDePrix = document.querySelectorAll('.card .indice')

for (let i = 0; i < card.length; i++){
    btnStar[i].addEventListener('click', e => {
        btnStar[i].childNodes[1].classList.toggle('bi-star')
        btnStar[i].childNodes[1].classList.toggle('bi-star-fill')
    })
    card[i].addEventListener("mouseover", e => {
        indiceDePrix[i].style.opacity = "1"
        indiceDePrix[i].style.transition = "all .5s ease"
    })
    card[i].addEventListener("mouseout", e => {
        indiceDePrix[i].style.opacity = ""
        indiceDePrix[i].style.transition = "all .5s ease"
    })
}