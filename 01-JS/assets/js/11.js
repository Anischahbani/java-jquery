/*********************Le Dom*********************/
/**L Dom est une interface de develloppement en java script pour HTMl
 * grace au Dom je vais etre en mesure d'acceder / modifier mon html
 * 
 * l'objet documeent c'est le point d'entrée vers monn contenu html.
 * 
 * chaque page chargée dans mon navigateur a un objet "document"***/

//--comment puis je faire pour récupérer les différentes informations de ma page HTML ?

//----document.getElementById-----------

/**document.getElementById() : c'est une fonction qui va permettre de récupérer un élement HTML
à paritr de son identrifiant unique ID **/

var bonjour=document.getElementById('bonjour');
console.log(bonjour);

//----document.getElementByClassName-----------

//**document.getElementByClassName() : c'est une fonction qui va permettre de récupérer un ou plusieurs élements (une liste) HTML à partir de leur classe. */

var contenu=document.getElementsByClassName('contenu');
console.log(contenu);

//--Me renvoi un tableau JS avec mes elelemnt HTML ou encore autrement dit , une collection d'éléments HTML.

//----document.getElementByTagName-----------

//**document.getElementByTagName() : c'est une fonction qui va permettre de récupérer un ou plusieurs élements (une liste) HTML à partir de leur  nom de balise */

var span=document.getElementsByTagName("span");
console.log(span);