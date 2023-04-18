(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')


  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }else{
        event.preventDefault();
        var trigger = document.getElementById("trigger")
        trigger.click();
      }
      form.classList.add('was-validated')
    }, false)

  })

})()

const pwdError = document.getElementById("pwdError")
const pwdRepError = document.getElementById("pwdRepError") 
const contraseña = document.getElementById("contraseña")
const repetirContraseña = document.getElementById("repitaContraseña")

repetirContraseña.onkeyup = function(){
  if(repetirContraseña.value != contraseña.value){
    pwdRepError.style.display = "initial"
  }else{
    pwdRepError.style.display = "none"
  }
}

contraseña.onkeyup = function(){
  if(contraseña.value.length<6){
    pwdError.style.display = "initial"
  }else{
    pwdError.style.display = "none"
  }
}






  