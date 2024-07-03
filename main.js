




function menu() {
    let modal = document.getElementById('menu')
    if (!modal.classList.contains('openMenu')){
        modal.classList.remove('closeMenu')
        modal.classList.add('openMenu')
        modal.classList.remove('hidden')
        setTimeout(() => {
            modal.classList.add('block')
        }, 700)
    }
    else{
        modal.classList.remove('openMenu')
        modal.classList.add('closeMenu')
        modal.classList.remove('block')
        setTimeout(() => {
            modal.classList.add('hidden')
        }, 700)
    }
}


function cart() {
    let modalCart = document.getElementById('cart')
    if (!modalCart.classList.contains('openCart')){
        modalCart.classList.add('openCart')
        modalCart.classList.remove('hidden')
        modalCart.classList.add('block')

    }
}




function createTask(){
    let dataInput = document.getElementsByClassName('data')
    let task = document.getElementById('task')
    task.innerHTML = ''
    task.innerHTML += dataInput[0].value
}