$(function() {
    $( ".accordion" ).accordion({
        heightStyle: 'content',
        active: true,
        collapsible: true
    } );
});

$(document).ready(function($) {
	$('.popup-open').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
        $("body").removeClass("hidden");
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});

});