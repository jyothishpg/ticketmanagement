if ($("#datepicker").length) {
  var date = new Date();
  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap5',
    todayHighlight: true,
    autoclose: true,
    startDate: new Date(),
  }).datepicker("setDate", date);
}
$("#slide-btn-right").click(function() {
  var $widthLeft = $('#tickets-left').css('width');
  var $width1 = "-" + $widthLeft;
  var $width100 = "100%"
  $('.tickets-left').animate({
      "margin-left": $width1
  }, 500);
  $('#slide-btn-left').animate({
    "left": '91'
  }, 500);
  // $('#tickets-right').css('width', '97%');
  $('#tickets-right').animate({
    "width": '98%'
  }, 500);
  $("#slide-btn-left").show();
  $(this).hide()
});
$("#slide-btn-left").click(function() {
  var $widthLeft = $('#tickets-left').css('width');
  var $width1 =  $widthLeft;
  var $width100 = "100%"
  $('.tickets-left').animate({
      "margin-left": 20
  }, 500);
  $('#slide-btn-left').animate({
    "left": 91
  }, 500);
  $('#tickets-right').animate({
    "width": '64.5%'
  }, 500);
  $("#slide-btn-right").show();
  $(this).hide()
});
$('.example-css').barrating({
  theme: 'css-stars',
  showSelectedRating: false
});




var $widthnotificationModal = $('.notification-modal').css('width');
var $widthnotificationModalMinus = "-" + $widthnotificationModal;
$(".notification-modal").css("right", $widthnotificationModalMinus);

$(".notification-btn").click(function() {
  $('.notification-modal').animate({
    "right": 0
  }, 500);
  $(".notification-modal").show();
  $(".overlay").addClass("d-block");
});
$(".close-notification-modal").click(function() {
  $('.notification-modal').animate({
    "right": $widthnotificationModalMinus
  }, 500);
  $(".overlay").removeClass("d-block");
});
$(".ShowFeedbackClick").click(function() {
  var divid = $(this).attr('title');
  $('#' + divid).toggleClass("d-none");
});

var $widthCreatearticleModal = $('.create-article-modal').css('width');
var $widthCreateArticleModalMinus = "-" + $widthCreatearticleModal;
$(".create-article-modal").css("right", $widthCreateArticleModalMinus);
$(".create-article").click(function() {
  $('.create-article-modal').animate({
    "right": 0
  }, 500);
  $(".create-article-modal").show();
  $(".overlay").addClass("d-block");
});

$(".close-create-article-modal").click(function() {
  $('.create-article-modal').animate({
    "right": $widthCreateArticleModalMinus
  }, 500);
  $(".overlay").removeClass("d-block");
});
$(".overlay").click(function() {
  $('.create-article-modal').animate({
    "right": $widthCreateArticleModalMinus
  }, 500);
  $('.notification-modal').animate({
    "right": $widthnotificationModalMinus
  }, 500);
  $(this).removeClass("d-block");
});

$(".re-direct-to-details").click(function() {
  window.location.href = 'community-details.html'
});

window.onload = function(){
  $(".pageloader").fadeOut("slow");
};
$(".ticketsResolution").click(function() {
  window.location.href = 'tickets-resolution.html'
});