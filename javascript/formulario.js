
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')


  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)


  })

})()

const pwdRepError = document.getElementById("pwdRepError") 
const contraseña = document.getElementById("contraseña")
const repetirContraseña = document.getElementById("repitaContraseña")

repetirContraseña.addEventListener('submit', ()=>{
  if(repetirContraseña.value != contraseña.value){
    pwdRepError.style.display = "initial"
  }else{
    pwdRepError.style.display = "none"
  }

})




  