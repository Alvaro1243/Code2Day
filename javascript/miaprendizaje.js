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

  for(var i=0; i<currarray.length; i++) {
    var rating = "";
    for(var j=0; j<currarray[i].rating; j++) {
      rating += '<i id="star" class="fa fa-star"></i>';
    }

    var cardElement = document.createElement("div");
    cardElement.classList.add("col-md-4", "mt-3");
    cardElement.innerHTML = `
      <div class="card p-3 ps-5 pe-3">
        <a href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${1}">
          <img src="${currarray[i].image}" />
        </a>
        <a href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${1}">
          <h4 class="text-capitalize text-center">${currarray[i].title}</h4>
        </a>
        <div class="d-flex justify-content-center">
          ${rating}
        </div>
        <p class="mt-2">${currarray[i].description}</p>
        <a href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}"&inscrito=${1} class="btn btn-primary">Ir al Curso</a><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Eliminar Curso
        </button>
      </div>
    `;

    // Add event listener to the "Eliminar Curso" button
    var deleteButton = cardElement.querySelector("button");
    deleteButton.addEventListener("click", function() {
      var card = this.parentNode;
      // Open the Bootstrap modal and set up the "Sí" button to delete the card
      var modal = document.getElementById("exampleModal");
      modal.querySelector("#eliminar").addEventListener("click", function() {
        card.parentNode.removeChild(card);
      });
    });

    document.getElementById("card").appendChild(cardElement);
  }
}