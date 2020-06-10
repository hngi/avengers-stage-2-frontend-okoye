
window.onload = function(){
var myIndex = 1;
var imgArray = ["unsplash-bed1.jpg","bed2.jpg","bed3.jpg","bed4.jpg"];
var backgroundImg = document.getElementsByClassName("headerContainer")[0];
var dots = document.getElementsByClassName("dot");

function slider(){
  myIndex++;
  if (myIndex > 3) {myIndex = 0} 
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }   
  backgroundImg.style.backgroundImage=`url(Resources/${imgArray[myIndex]})`; 
  dots[myIndex].classList.add("active");
}

dots[0].onclick = function(){
  myIndex= -1 ;
  slider();
}
dots[1].onclick = function(){
  myIndex= 0 ;
  slider();
}
dots[2].onclick = function(){
  myIndex= 1 ;
  slider();
}
dots[3].onclick = function(){
  myIndex= 2 ;
  slider();
}


function carousel() {
  slider();
  setTimeout(carousel, 7000); // Change image every 7 seconds
}
carousel();
}