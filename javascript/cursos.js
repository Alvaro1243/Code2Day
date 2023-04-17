let filter = []

let courses = [
  {
    title: 'Curso C++',
    image: 'images/c++.jpg',
    rating: 4,
    description: 'Introduccion al lenguaje C++. Cubre variables, control de flujo, funciones y programación orientada a objetos. ',
    date: '20/03/2023'
  },
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
    title: 'Curso C#',
    image: 'images/csharp.jpg',
    rating: 4,
    description: 'Curso avanzado: Profundiza en programación multihilo, LINQ, manejo avanzado de excepciones, programación de redes y desarrollo de aplicaciones para Windows y móviles. ',
    date: '20/03/2023'
  },
  {
    title: 'Curso JavaScript',
    image: 'images/js.jpg',
    rating: 5,
    description: 'Desarrolla habilidades en la creación de páginas web dinámicas e interactivas con nuestro curso de JavaScript.',
    date: '20/03/2023'
  },
  {
    title: 'Curso Python',
    image: 'images/Python.jpg',
    rating: 5,
    description: 'Mejora tus habilidades de programacion en este curso avanzado de este lenguaje de alto nivel',
    date: '20/03/2023'
  },
  {
    title: 'Curso R',
    image: 'images/R.jpg',
    rating: 5,
    description: 'Desarrolla habilidades en el análisis de datos con R y lleva tus proyectos al siguiente nivel con nuestro curso.',
    date: '20/03/2023'
  },
  {
    title: 'Curso CSS',
    image: 'images/css.jpg',
    rating: 5,
    description: 'Aprende a dar estilo a tus páginas web con nuestro curso de CSS.',
    date: '20/03/2023'
  },
  {
    title: 'Curso_PHP',
    image: 'images/php.jpg',
    rating: 5,
    description: 'Para aprender a programar en este lenguaje de servidor, cubriendo conceptos básicos como variables, estructuras de control, funciones, manejo de formularios y bases de datos.',
    date: '20/03/2023'
  }
];

showGallery(courses);

function showGallery(currarray) {

  document.getElementById("card").innerText = "";

  for(var i=0; i<currarray.length; i++) {
    var rating = "";
    for(var j=0; j<currarray[i].rating; j++) {
      rating += '<i id="star" class="fa fa-star"></i>';
    }

    document.getElementById("card").innerHTML += ` 
      <div class="col-md-4 mt-3">
      <div class="card p-3 ps-5 pe-3">
      <a href="./detallescurso.html?title=${encodeURIComponent(currarray[i].title)}&image=${encodeURIComponent(currarray[i].image)}&rating=${currarray[i].rating}&description=${encodeURIComponent(currarray[i].description)}&date=${currarray[i].date}&inscrito=${0}"><img src="${currarray[i].image}"/></a>
        <a href="./detallescurso.html?title=${encodeURIComponent(currarray[i].title)}&image=${encodeURIComponent(currarray[i].image)}&rating=${currarray[i].rating}&description=${encodeURIComponent(currarray[i].description)}&date=${currarray[i].date}&inscrito=${0}"><h4 class="text-capitalize text-center">${currarray[i].title}</h4></a>
        <div class="d-flex justify-content-center">
        ${rating}
      </div>
        <p class="mt-2"></p>
        <a href="formulario.html" class="btn btn-primary">Inscribirse</a>
      </div>
    </div>`
  }
}


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
});

