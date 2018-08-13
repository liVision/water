$(document).ready(function() {
  $(".footer-end-test").on('click', function() {
    $(".vux-popup-dialog").slideDown("30");
  });
  $(".fix-content").on('click', function() {
    $(".vux-popup-dialog").slideUp("30");
  });
  $(".p-raise").on('click', function() {
    window.location.href = "./login.html";
  });
  $(".title").on('click', function() {
    $('.overlay').css({"opacity":"1","display":"flex"});
    $('.dialog').fadeIn(500);
  });
  $(".close-btn").on('click', function() {
    $('.overlay').css({"opacity":"0","display":"none"});
    $('.dialog').fadeOut(500);
  });
  $(".check").on('click', function() {
    $('.overlay').css({"opacity":"0","display":"none"});
    $('.dialog').fadeOut(500);
  });
  $(".div-spread").on('click', function() {
    if ($(".text-content").hasClass('short')) {
      $(".text-content").removeClass('short')
    } else {
      $(".text-content").addClass('short')
    }
  });
  $(".p-title-report").on('click', function() {
    window.location.href = "./zhiyi.html";
  });
  $(".report-right").on('click', function() {
    window.location.href = "./zhiyi.html";
  });
});