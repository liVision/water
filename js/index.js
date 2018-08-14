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
  $(".title-right").on('click', function() {
    $('.baozhang').css({"opacity":"1","display":"flex"});
    $('.baozhang-dialog').fadeIn(500);
  });
  $(".close-btn").on('click', function() {
    $('.baozhang').css({"opacity":"0","display":"none"});
    $('.baozhang-dialog').fadeOut(500);
  });
  $(".check").on('click', function() {
    $('.baozhang').css({"opacity":"0","display":"none"});
    $('.baozhang-dialog').fadeOut(500);
  });
  $(".story-spread").on('click', function() {
    if ($(".text-content").hasClass('short')) {
      $(".text-content").removeClass('short');
      $(".story-spread span").text("点击收起");
    } else {
      $(".text-content").addClass('short')
      $(".story-spread span").text("展开全文");
    }
  });
  $(".jinzhan-spread").on('click', function() {
    if ($(".jinzhan").hasClass("none")) {
      $(".jinzhan").removeClass("none");
      $(".jinzhan").css("display", "flex")
      $(".jinzhan-spread").text("收起")
    } else {
      $(".jinzhan").addClass("none");
      $(".jinzhan").css("display", "none")
      $(".jinzhan-spread").text("展开")
    }
  })
  $(".p-title-report").on('click', function() {
    window.location.href = "./zhiyi.html";
  });
  $(".report-right").on('click', function() {
    window.location.href = "./zhiyi.html";
  });
  $(".div-huzhu-explain").on('click', function() {
    $('.explain-text').css({"opacity":"1","display":"flex"});
    $('.explain-dialog').fadeIn(500);
  });
  $(".dialog a").on('click', function() {
    $('.explain-text').css({"opacity":"0","display":"none"});
    $('.explain-dialog').fadeOut(500);
  });
});