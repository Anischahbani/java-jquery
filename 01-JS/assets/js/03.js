/*------------------LA CONCATENATION----------------------*/

var debutdephrase ="Aujourd'hui ";
var ladate=new Date();
var suitedephrase=", sont présents:";
var nombredestagiaires= ''+ 18;
var findephrase=" stagiaire.<br>";

//-- nous souhaitons maintenant grace a la concatenation afficher tout ce petit monde en un seul morceau!

document.write(  debutdephrase + ladate.getDate() + '/' + ladate.getMonth() + '/' + ladate.getFullYear() + '/' + nombredestagiaires + findephrase );


/**Exercice 
 * créez une concatenation a partir des elements suivants:
*/
var phrase1= " je m'appelle";
var phrase2= " Anis et j'ai ";
var age = 28 ;
var phrase3=" ans !";

document.write(  phrase1 + phrase2 + age + phrase3 );