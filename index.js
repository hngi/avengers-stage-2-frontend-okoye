$(document).ready(function () {
  // Activate Carousel
  $('#slide-wrapper').carousel();

  // Enable Carousel Indicators
  $('.item1').click(function () {
    $('#slide-wrapper').carousel(0);
  });
  $('.item2').click(function () {
    $('#slide-wrapper').carousel(1);
  });
  $('.item3').click(function () {
    $('#slide-wrapper').carousel(2);
  });

  $('.item4').click(function () {
    $('#slide-wrapper').carousel(3);
  });

  $('.item5').click(function () {
    $('#slide-wrapper').carousel(4);
  });

  // Enable Carousel Controls
  $('.carousel-control-prev').click(function () {
    $('#slide-wrapper').carousel('prev');
  });
  $('.carousel-control-next').click(function () {
    $('#slide-wrapper').carousel('next');
  });
});
