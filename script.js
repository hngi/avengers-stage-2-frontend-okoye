var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Contact Us
contactFormStyle = window.getComputedStyle(document.getElementById("contact_form"))
map = document.getElementById("map");
contact_headingStyle = window.getComputedStyle(document.getElementById("contact_heading"));
map.style.height = contactFormStyle.height;
map.style.marginTop = contact_headingStyle.height;
console.log(contactFormStyle.height, map.style.height, contact_headingStyle.height)
