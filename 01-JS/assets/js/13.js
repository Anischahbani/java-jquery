/****************************Les évenements*****************************/
//*Les évènement vont me permettre de d"clencher une fonction c'est a dire une serie d'instruction suite a une action de mon utilistateur .
/**objectif : Etre en mesure de capturer ces evenements afin d'executer une fonction.
 
Les evenements : MOUSE (souris)

    CLICK      : au clic sur un élément
    mouseenter : la souris passe au dessus de la zone qu'occupe un élément 
    mouseleave : la souris sors de cette zone

Les evenements : KEYBOARD (clavier)

    keydown    : une touche du clavier est enfoncée
    keyup      : une touche du clavier a été relancée 

Les evenement  : WINDOW (fenetre)

    scroll     : défilement de la fenetre
    resize     : redimensionnement de la fênetre

Les evenement  : FORM (Formulaire)

    change     : pour les élements <input> , <select> et <textarea>
    submit     : à l'envoi (soumission) du formulaire
    input      : pour capter la saisie d'un utilisateur sur un champ <input>

################################# Les Ecouteurs d'evenement #############################################

pour attacher un évenement a un élement ou autement dit pour déclarer un ecouteur d'evenement qui se chargera de declencher une fonction je vais utiliser la syntaxe suivante :


*/


var p=document.getElementById('Monparagraphe');

    //-- je souhaite que mon paragraphe soit rouge au clic de la souris
    //--1 je défini une fonction chargée d'executer cette action
    function changeColorToRed(){
        p.style.color="red";
    }
    p.addEventListener('click',changeColorToRed);


/**Exercice
 * A l'aide de javascript , créez un champ "input" type text avec un ID unique.
 * Afficher ensuite dans une alerte la saisie de l'utilisateur.
*/
//--Création du champ Input
var input=document.createElement('input');
//--Attribution d'un attribut
input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu...');
//--Attribution d'un Id
input.id='moninput';
//--Ajout de l'élément dans ma page
document.body.appendChild(input);
//---------
function voirlasaisiedemoinput(){
    alert(input.value);
}
input.addEventListener('change', voirlasaisiedemoinput);