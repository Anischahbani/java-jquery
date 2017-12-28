/**-
  votre mission que vous devez accepter !
  Réaliser une fonction permettant à un internaute de :
  -saisir son prénom dans un prompt
  -retourner à l'utilisateur : bonjour[PRENOM], Quel age as tu ?
  -saisir son age
  -retourner a l'utilisaeur : tu es donc né en [ANNEE DE NAISSANCE].
  Bonjour [PRENOM], tu as [AGE]!
 */
//-----------------------------------------------//
 
//1. Initialisation des varibles
var dateobj         = new Date();
var anneeactuelle   = dateobj.getFullYear();
//2. Création d'une fonction
function Hello(){
    //2a. je demande à l'utilisateur son prénom
let prenom = prompt("Hello! what is your name?","Saisir votre prénom");
console.log(prenom);
console.log(typeof prenom);
    //2b. je lui demande son age 
let age= parseInt (prompt("Bonjour " + prenom +"How old are you?","Saisir votre age"));
console.log(age);
console.log(typeof age);
    //2c. Déduire l'année de naissance et l'afficher dans une "alert".
alert("Tu es donc né en "+ (anneeactuelle-age)+"!");
    //2d. J'affiche tout ca dans la page (Récapitulaif)
document.write("Hello "+prenom+ " it's AMAZING ! you're" + age +"years old");
}
//3.Exécution de ma Fonction
Hello();











/*function mafonction() {
    var result = parseInt(prompt('Entrez votre prenom :'));
    alert(result);
}

mafonction();


alert('Vous en êtes à la moitié !');

byTwo();*/
