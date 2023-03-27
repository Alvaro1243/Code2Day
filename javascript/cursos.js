let filter = []

let courses = [
  {
    title: 'Curso C++',
    image: 'images/c++.jpeg',
    rating: 4,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso HTML',
    image: 'images/html.png',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso Java',
    image: 'images/java.png',
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
    image: 'images/js.png',
    rating: 5,
    description: 'En este curso aprenderás...',
    date: '20/03/2023'
  },
  {
    title: 'Curso Python',
    image: 'images/Python.jpeg',
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
      rating += '<i class="bi bi-star-fill"></i>';
    }
    for(var k=0; k<5-currarray[i].rating; k++) {
      rating += '<i class="bi bi-star"></i>';
    }
    document.getElementById("card").innerHTML += ` 
      <div class="col-md-4 mt-3">
      <div class="card p-3 ps-5 pe-3">
        <img src="${currarray[i].image}"/>
        <h4 class="text-capitalize text-center">${currarray[i].title}</h4>  
        <p class="mt-2">${currarray[i].description}</p>
        <div class="d-flex justify-content-center">
          ${rating}
        </div>
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


