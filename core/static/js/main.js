






function ModalMenu(){
    var modal = document.getElementById("menuModal")
    if (!modal.classList.contains("animate-OpenModalMenu")){
        modal.classList.remove("animate-CloseModalMenu")
        modal.classList.add("animate-OpenModalMenu")

        setTimeout(() => {
            modal.classList.add("block")
            modal.classList.remove("hidden")
        }, 700)
    }
    else{
        modal.classList.add("animate-CloseModalMenu")
        modal.classList.remove("animate-OpenModalMenu")
        setTimeout(() => {
            modal.classList.remove("block")
            modal.classList.add("hidden")
        }, 700)
    }
    
}


function CartMenu(){
    var modal = document.getElementById("cartModal")
    if (!modal.classList.contains("animate-OpenModalCart")){
        modal.classList.remove("animate-CloseModalCart")
        modal.classList.add("animate-OpenModalCart")

        setTimeout(() => {
            modal.classList.add("right-0")
            modal.classList.add("block")
            modal.classList.remove("hidden")
        }, 500)
    }
    else{
        modal.classList.add("animate-CloseModalCart")
        modal.classList.remove("animate-OpenModalCart")
        setTimeout(() => {
            modal.classList.remove("block")
            modal.classList.remove("right-0")
            modal.classList.add("hidden")
        }, 500)
    }
    
}