
// get the course title from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the course details from the URL parameters
const courseTitle = urlParams.get('title');
const courseDescription = urlParams.get('description');
const courseImage = urlParams.get('image');
const courseRating = urlParams.get('rating');
const courseDate = urlParams.get('date');

// Update the HTML elements with the retrieved values
document.getElementById('course-title').innerText = courseTitle;
document.getElementById('course-description').innerText = courseDescription;
document.getElementById('course-image').src = courseImage;
document.getElementById('course-rating').innerText = courseRating;
document.getElementById('course-date').innerText = courseDate;
