let filter = []

let courses = [
  {
    title: 'Curso HTML',
    image: 'images/html.jpg',
    rating: 5,
    description: 'Aprende a crear páginas web efectivas y funcionales, cubriendo la estructura básica de una página y etiquetas HTML.',
    date: '20/03/2023'
  },
  {
    title: 'Curso Java',
    image: 'images/java.jpg',
    rating: 3,
    description: 'En este curso aprenderás conceptos básicos como variables, estructuras de control, tipos de datos y programación orientada a objetos.',
    date: '20/03/2023'
  },
  {
    title: 'Curso Python',
    image: 'images/Python.jpg',
    rating: 5,
    description: 'Mejora tus habilidades de programacion en este curso avanzado de este lenguaje de alto nivel',
    date: '20/03/2023'
  }
];

showGallery(courses);

function showGallery(currarray) {

  document.getElementById("card").innerText = "";

  for (var i = 0; i < currarray.length; i++) {
    var rating = "";
    for (var j = 0; j < currarray[i].rating; j++) {
      rating += '<i id="star" class="fa fa-star"></i>';
    }

    var cardElement = document.createElement("div");
    cardElement.classList.add("col-md-4", "mt-3");
    cardElement.innerHTML = `
      <div class="card p-3 ps-5 pe-3">
        <img src="${currarray[i].image}" alt="${currarray[i].title}" />
        <a class="especial" href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${1}">
          <h4 class="text-capitalize text-center">${currarray[i].title}</h4>
        </a>
        <div class="d-flex justify-content-center">
          ${rating}
        </div>
        <p class="mt-2"></p>
        <a id="botonInscribir" href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${1}" class="btn btn-primary">Ir al Curso</a><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Eliminar Curso
        </button>
      </div>
    `;


    //eliminar
    var deleteButton = cardElement.querySelector("button");
    deleteButton.addEventListener("click", function () {
      var card = this.parentNode;

      var modal = document.getElementById("exampleModal");
      modal.querySelector("#eliminar").addEventListener("click", function () {
        var nodeList = card.childNodes;
        var node = nodeList[3];
        nodeList = node.childNodes;
        var curso = nodeList[1];
        var index = courses.findIndex(c => c.title == curso.textContent);
        var parent = card.parentNode.parentNode;
        var i =0;
        while (i<parent.childNodes.length){
          i = i+1;
          parent.removeChild(parent.firstChild);	
        }
        courses.splice(index, 1);
        showGallery(courses);
      });
    });

    document.getElementById("card").appendChild(cardElement);
  }
}


const button = document.getElementById("eliminar")

button.onclick = function(){
var b = document.getElementById("trigger")
b.click();
}


//search
document.getElementById("myinput").addEventListener("keyup", function() {
    let text = document.getElementById("myinput").value.toLowerCase();
    
    filter = courses.filter(function(x) {
      if(x.title.toLowerCase().includes(text) || x.description.toLowerCase().includes(text)) {
        return x.title; 
      }
    });
  
    if(this.value == "") {
      showGallery(courses);
      document.getElementById("para").style.display   = 'none';  
    } else {
      if(filter == "") {
        document.getElementById("para").style.display = 'block';  
        document.getElementById("card").innerHTML = "";  
      } else {
        showGallery(filter);
        document.getElementById("para").style.display = 'none';  
      }
    }
    const botones = document.querySelectorAll("#botonInscribir")
    var i = 0;
    Array.from(botones).forEach(a => {
    a.setAttribute("href","./detallescurso.html?title="+courses[i].title+ "&image="+courses[i].image+"&rating="+
    courses[i].rating+"&description="+courses[i].description+"&date="+courses[i].date+"&inscrito="+ 1 + "&login="+login);
    i++;
})
  });

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

const enlaces = document.querySelectorAll("a:not(.especial)")


Array.from(enlaces).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"?login=" + login);
})


cierreSesion.setAttribute("href","index.html?login=null")



const especiales = document.querySelectorAll("a.especial")

Array.from(especiales).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"&login=" + login);
})



  