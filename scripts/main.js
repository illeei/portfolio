$("#menu").click(function() {
  $("#full-menu").toggleClass("open");
});

$("#full-menu").click(function() {
  $("#full-menu").removeClass("open");
});

$('a').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 742) {
    	$('#sec-nav').addClass('stick');
    }
    else {
    $('#sec-nav').removeClass('stick');
    }
  });
});
