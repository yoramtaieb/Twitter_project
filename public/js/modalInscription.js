document.getElementById('js-inscription').addEventListener('click', () => {
    document.getElementsByClassName('modale')[0].classList.add('displayModale')
    document.getElementsByClassName('formConnexion')[0].style.display = 'none'
})

document.getElementsByClassName('buttonClose')[0].addEventListener('click', () => {
    document.getElementsByClassName('modale')[0].classList.remove('displayModale')
    document.getElementsByClassName('formConnexion')[0].style.display = 'block'
})