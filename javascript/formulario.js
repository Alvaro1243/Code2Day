
contraseña.onkeyup = function () {
    const contraseña = document.getElementById("contraseña")
    const pwdError = document.getElementById("pwdError")

    if (contraseña.value.length >= 6) {
      pwdError.style.display = "none";
    }
  };





  