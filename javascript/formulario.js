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
        var trigger = document.getElementById("trigger")
        trigger.click();
        event.preventDefault();
      }
      form.classList.add('was-validated')
      
    }, false)

  })

})()



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

function ComprobarContraseña(){
 pwdRepError = document.getElementById("pwdRepError") 
 contraseña = document.getElementById("contraseña")
 repetirContraseña = document.getElementById("repetirContraseña")
 pwdError = document.getElementById("pwdError")

if(contraseña.value.length>=6){
  pwdError.style.display = "none"
}else{
  pwdError.style.display = "initial"
}

 if(contraseña.value != repetirContraseña.value){
  pwdRepError.style.display = "initial"
  }else{
    pwdRepError.style.display = "none"
 }

}








  