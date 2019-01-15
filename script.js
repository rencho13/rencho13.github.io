$(document).ready(function() {
$('.play').click(function() {
		$(".audioDemo").trigger('play');
		$(this).css('background','purple');

$('.play').dblclick(function() {
		$(this).css('background','grey');
		$(".audioDemo").trigger('pause');

  		 });
 	});
});
$(function() {
	$('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');

});
$(function() {
    $("#texteJQ").fadeOut("slow").fadeIn("slow").css('color','red'); 
});

