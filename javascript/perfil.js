const urlParams = new URLSearchParams(window.location.search);
const login = urlParams.get('login');
const perfil = document.getElementById('perfil')
const inicioSesion = document.getElementById('inicioSesion')
const cierreSesion = document.getElementById('cierreSesión')
const misCursos = document.getElementById('misCursos')
const registrar = document.getElementById('registrar')




if(login=='null'){
    perfil.style.visibility = "hidden"
    inicioSesion.style.visibility = "visible"
    cierreSesion.style.visibility = "hidden"
    misCursos.style.visibility = "hidden"
    registrar.style.visibility = "visible"

}else{
  perfil.style.visibility = "visible"
  inicioSesion.style.visibility = "hidden"
  cierreSesion.style.visibility = "visible"
  misCursos.style.visibility = "visible"
  registrar.style.visibility = "hidden"

}

const enlaces = document.querySelectorAll("a:not(#cierreSesión)")


Array.from(enlaces).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"?login=" + login);
})