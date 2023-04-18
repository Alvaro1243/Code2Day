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

const urlParams = new URLSearchParams(window.location.search);
const login = urlParams.get('login');
const perfil = document.getElementById('perfil')
const inicioSesion = document.getElementById('inicioSesion')
const cierreSesion = document.getElementById('cierreSesión')
const misCursos = document.getElementById('misCursos')



if(login=='null'){
    perfil.style.visibility = "hidden"
    inicioSesion.style.visibility = "visible"
    cierreSesion.style.visibility = "hidden"
    misCursos.style.visibility = "hidden"

}else{
  perfil.style.visibility = "visible"
  inicioSesion.style.visibility = "hidden"
  cierreSesion.style.visibility = "visible"
  misCursos.style.visibility = "visible"

}

const enlaces = document.querySelectorAll("a:not(#cierreSesión)")

console.log(enlaces)

Array.from(enlaces).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"?login=" + login);
})








  