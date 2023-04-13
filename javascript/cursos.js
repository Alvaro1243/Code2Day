let filter = []

let courses = [
  {
    title: 'Curso C++',
    image: 'images/c++.jpg',
    rating: 4,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso HTML',
    image: 'images/html.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso Java',
    image: 'images/java.jpg',
    rating: 3,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso C#',
    image: 'images/csharp.jpg',
    rating: 4,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso JavaScript',
    image: 'images/js.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso Python',
    image: 'images/Python.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso R',
    image: 'images/R.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso CSS',
    image: 'images/css.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso_PHP',
    image: 'images/php.jpg',
    rating: 5,
    description: 'En este curso aprenderás...',
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
      <a href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${0}"><img src="${currarray[i].image}"/></a>
        <a href="./detallescurso.html?title=${currarray[i].title}&image=${currarray[i].image}&rating=${currarray[i].rating}&description=${currarray[i].description}&date=${currarray[i].date}&inscrito=${0}"><h4 class="text-capitalize text-center">${currarray[i].title}</h4></a>
        <div class="d-flex justify-content-center">
        ${rating}
      </div>
        <p class="mt-2">${currarray[i].description}</p>
        <a href="formulario.html" class="btn btn-primary">Inscribirse</a>
      </div>
    </div>`
  }
}


document.getElementById("myinput").addEventListener("keyup", function() {
  let text = document.getElementById("myinput").value.toLowerCase();
  
  filter = courses.filter(function(x) {
    if(x.title.toLowerCase().includes(text)) {
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




//open detallescurso.html
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h4').textContent;
    const image = card.querySelector('img').src;
    const rating = card.querySelector('.fa-star').length;
    const description = card.querySelector('p').textContent;

    const url = `detallescurso.html?title=${title}&image=${image}&rating=${rating}&description=${description}&date=${date}`;

    window.location.href = url;
  });
});
