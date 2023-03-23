const buttons = document.querySelectorAll("#eliminar")
const cursos = document.getElementById("cursos")

for(let button of buttons){
    button.addEventListener("click",deleteCurso,false)
}

function deleteCurso(){
    const li = this.parentNode
    cursos.removeChild(li)
}