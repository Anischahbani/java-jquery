/*La Dispnoibilié du DOM
A partir du moment ou mon DOM , c'est a dire l'ensemble de l'arborecence de ma page est completement chargé
je peux commencer a utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction
cette fonction sera appelé AUTOMATIQEMENT par jQuery
3 facons de faire:
*/ 
//--1er possibilité
jQuery(document).ready(function() {
    //--Ici le DOM est entierement chargé je peux procéder à mon code JS.

});
//--2eme possibilité
$(document).ready(function(){

});

//--3eme possibilité
$(function(){
    alert("hello!");
    //-- En JS:
    document.getElementById(TextEnjQuery).innerHTML="<strong>Mon texte en JS </strong>";

    //-- En jQuery les selecteurs sont les memes qu'en css:
    $('#TextEnjQuery').html('Mon text en JQ');

    
});