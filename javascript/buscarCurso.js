const searchInput = document.querySelector('.searchbox-input');

searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase();  
  const courses = document.querySelectorAll('.card');  

  courses.forEach(course => {
    const title = course.querySelector('.card-title').textContent.toLowerCase(); 
    const description = course.querySelector('.card-text').textContent.toLowerCase(); 

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      course.style.display = 'block';   
    } else {
      course.style.display = 'none';  
    }
  });
});