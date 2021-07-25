const close = document.querySelector('.close')
const modal = document.querySelector('.modal')
const login = document.querySelector('.login-btn')



login.addEventListener("click", openModal)

close.addEventListener("click", closeModal)

window.addEventListener("click", outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}


function outsideClick(e) {
  if(e.target == modal){
    closeModal()
  }
}
