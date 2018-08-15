$(document).ready(function() {
  $("select").change(function() {
    var options = $(this).val()
    // if (options == '同学/同事/朋友') {
    //   $('.patient-container').removeClass('none');
    // } else if (options == '其他') {
    //   $('.patient-container').removeClass('none');
    // } else {
    //   console.log(options);
    //   $('.patient-container').addClass('none');
    // }
    if (options == '同学/同事/朋友' || options == '其他') {
      $('.patient-container').removeClass('none');
    } else {
      $('.patient-container').addClass('none');
    }
  })
});