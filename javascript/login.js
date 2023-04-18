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


Array.from(enlaces).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"?login=" + login);
})

