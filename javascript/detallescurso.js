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
