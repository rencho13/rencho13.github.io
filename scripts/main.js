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

let monTitre = document.querySelector('h1');
let sousTitre = document.getElementById('sousTitre');

var element = document.getElementById('name');
element.onmouseover = function() {
	monTitre.textContent = 'Hello world!';
}
element.onmouseout = function() {
	monTitre.textContent = 'M. BERGER Stéphan';
}
let monBouton = document.getElementById('bubu');

var titre = document.getElementById('sousTitre');
var parent = document.body;

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  
  sousTitre.textContent = 'Merci de consulter mon CV, ' + monNom;
}
if (!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  sousTitre.textContent = 'Merci de consulter mon CV, ' + nomEnregistré;
}

monBouton.addEventListener('click', function() {
  définirNomUtilisateur();
});