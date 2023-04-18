const urlParams = new URLSearchParams(window.location.search);

const courseTitle = urlParams.get('title');
const courseDescription = urlParams.get('description');
const courseImage = urlParams.get('image');
const courseRating = urlParams.get('rating');
const courseDate = urlParams.get('date');
const inscrito = urlParams.get('inscrito');


document.getElementById('course-title').innerText = courseTitle;
document.getElementById('course-description').innerText = courseDescription;
document.getElementById('course-image').src = courseImage;
document.getElementById('course-rating').innerText = courseRating;
document.getElementById('course-date').innerText = courseDate;

var enlace = document.getElementById("inscribirse");

if(inscrito==1){
    enlace.style.visibility="hidden";
}


//Comment section:
const nameInput = document.getElementById('username');
const commentInput = document.getElementById('comment');
const addButton = document.getElementById('add-comment-btn');
const cancelButton = document.getElementById('cancel-btn');
const commentsSection = document.getElementById('comment-section');


addButton.addEventListener('click', () => {

  const nameValue = nameInput.value.trim();
  const commentValue = commentInput.value.trim();

  if (nameValue !== '' && commentValue !== '') {

    const commentElement = document.createElement('div');
    commentElement.classList.add('card', 'mb-3');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const nameElement = document.createElement('h6');
    nameElement.classList.add('fw-bold', 'text-primary', 'mb-1');
    nameElement.textContent = nameValue;

    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('card-text');
    commentTextElement.textContent = commentValue;

    cardBodyElement.appendChild(nameElement);
    cardBodyElement.appendChild(commentTextElement);
    commentElement.appendChild(cardBodyElement);

    commentsSection.appendChild(commentElement);

    nameInput.value = '';
    commentInput.value = '';
  }
});

cancelButton.addEventListener('click', () => {
  nameInput.value = '';
  commentInput.value = '';
});


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
  const en = document.querySelectorAll("#inscribirse")
  Array.from(en).forEach(a => {
    a.setAttribute("href","");
    a.setAttribute("data-bs-toggle",'modal');
    a.setAttribute("data-bs-target",'#okModal');
  })
}

const enlaces = document.querySelectorAll("a:not(#cierreSesión)")


Array.from(enlaces).forEach(a => {
  a.setAttribute("href",a.getAttribute("href")+"?login=" + login);
})

const button = document.getElementById("aceptar")

button.onclick = function(){
  var b = document.getElementById("trigger")
  b.click();
}


