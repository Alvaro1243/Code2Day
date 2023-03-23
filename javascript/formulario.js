const contraseña = document.getElementById("contraseña")
const pwdError = document.getElementById("pwdError")

contraseña.onkeyup = function () {
    if (contraseña.value.length >= 6) {
      pwdError.style.display = "none";
    }else{
      pwdError.style.display = "initial";
    }
  };

const repetirContraseña = document.getElementById("repitaContraseña")
const pwdRepError = document.getElementById("pwdRepError")

  repetirContraseña.onkeyup = function () {
    if (contraseña.value == repetirContraseña.value) {
      pwdRepError.style.display = "none";
    }else{
      pwdRepError.style.display = "initial";
    }
  }

const enviarButton = document.getElementById("enviar")
const cancelarButton = document.getElementById("cancelar")
const formulario = document.getElementById("formulario")

enviarButton.addEventListener("click",function(){
  if(formulario[0].checkValidity()){
    window.alert("Se ha inscrito correctamente al curso")
  }
})

cancelarButton.addEventListener("click",function(){
  window.alert("Ha cancelado la inscripción")
  window.location.replace("./cursos.html");
})




  