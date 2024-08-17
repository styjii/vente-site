form = document.querySelector('.form-control')
const nom = form.name
const email = form.email

nom.addEventListener('input', e => {
    e.target.value = e.target.value.toUpperCase()
})

form.addEventListener('submit', e => {
    if (nom.value === ''){
        alert('veuille entre votre nom')
        nom.style.boxShadow = '0 0 5px red'
    } else if (email.value === ''){
        alert('veuille entre votre email')
        email.style.boxShadow = '1px solid red'
    }

    
    if (nom.value !== ''){
        nom.style.boxShadow = ''
    } else if (email.value !== ''){
        email.style.boxShadow = ''
    }
    e.preventDefault()
})