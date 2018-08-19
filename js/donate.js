$(document).ready(function() {
	$('.payment-picker-cell').on('click', function() {
		$(this).addClass('selected');
		$(this).parent().siblings().find('.selected').removeClass('selected');
	})
});