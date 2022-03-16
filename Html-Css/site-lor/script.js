const lista = document.getElementById('lista-dos-links')
const botaoMobile = document.getElementById('btn-mobile')

var teste = true

function abreMenu () {
    lista.classList.toggle('on')
    document.body.style.overflow = teste ? "hidden" : "initial"
    teste = !teste
}

botaoMobile.addEventListener('click', abreMenu)