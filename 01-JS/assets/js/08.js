/************Les conditions*******************/
/*var MajoritelegaleFr=18;

if(12>=MajoritelegaleFr){
    alert('bienvenue!')
}
// le else n'est pas obligatoire.
else{
    alert('Google');
}
*/

/*Exercice

créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
s'il a la majorité legale , alors je lui souhaite la bienvenue ,
sinon je fait une redirection sur google apres lui avoir signalé le soucis
*/
//--1.Décaration la majorité légale
/*var MajoritelegaleFr=18;*/
//--2.Créer une fonction pour demander son age
/**
 * si l'age d'utilisateur passé en paramètre en supérieur ou égale a la majorité légale alors la foction retourne vrai
 * sinon elle retourne faux.
 * @param{Int}age
 * @return{Boolean}
 * 
 */
/*function verifierage(age){
    if (age>=MajoritelegaleFr){
        return true;
    }
    else{
        return false;}
    }
//--3.je damande a l'utilisateur son age

var age=parseInt(prompt("Bonjour , Quel age avez-vous?","Saisissez votre age"));

//--4.Vérification de l'age de l'utilisteur
if (verifierage(age)){
    //--4.a.J'affiche un message de bienvenue
    alert('Bienvenue sur mon site internet ');
    document.write("0_0!!");
}
else{
    //--4.b. J'effectue une redirection
    document.location.href="http://google.fr"; 
}

*/
/**Les opérateurs de comparaison 
   
    L'opérateur de comparaison "==" signifier: égal à
    Il permet de verifier que deux variables sont identiques.
   
    l'opérateur de comparaison "===" signifier: strictement égal à . 
    Il va comparer la valeur et le type de donnée.
   
    l'opérateur de comparaison "!="  signifie : différent de 
   
    l'opérateur de comparaison "!==" signifie : strictement différent de .
*/

/*Exercie
j'arrive sur un espace sécurisé au moyen d'un email et d'un mot de passe.
je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site
En cas d'echec une alert m'informe du problème.
si tous se passe bien , un message de bienvenue m'accueil.

*/ 
//--Base de donnnées

var email,mdp;
email="wf3@hl-media.fr";
mdp="wf3";

//--1.Demander a l'utilisateur son email
/* var emailuser=prompt("Bonjour, Quel est votre email?","Saisissez votre email");
//--2.Je vérifie si l'email saisie (emailuser) correspond a celui en BDD (email)
if(emailuser==email){
    //--2a.Tout est ok je continu la vérification avecle mot de passe.
    //--2a1.Je demande a l'utilisateur son mot de passe
 var mdpuser=prompt("Votre mot de passe?","Saisissez votre mot de passe"); 
    //--2a2.Vérification du mot de passe
if(mdpuser===mdp){
    alert("Bienvenue!");   
}else{
    alert("ATTENTION,nous n'avons pas reconnu votre mot depasse ");
}  
}else {
    //--2b.les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre adreese email");
}
*/
/**Vérifie si le couple email/mdp est correct 
@param{*string}emailuser
@param{*string}mdpuser
@return{Boolean}
*/
//--Exemple avec Fonction
function monutilisateurestcorrect(emailuser,mdpuser){
    if(emailuser===email&&mdpuser===mdp){
        return true;
    }else {
        return false;
    }
}
var emailuser=prompt("Bonjour, Quel est votre email?","Saisissez votre email");
var mdpuser=prompt("Votre mot de passe?","Saisissez votre mot de passe"); 
if(monutilisateurestcorrect(emailuser,mdpuser)){
    alert("Bienvenu "+emailuser);
}else{
    alert("ATTENTION, email/mot de passe incorrect.");
}


/**
    function mafonction(){
    var Email=prompt("Adresse mail ","Saisissez votre Email");
    var Mdp  =prompt("Mot de passe ","Saisissez votre Mot de passe");
    if
       ((Email===email)&&(Mdp===mdp)) {
        document.write("Bienvenue sur mon site internet");
       }
    else{

        alert('Error');
    }

}
mafonction();**/


/*************************Les opérateurs logiques*******************************/

/*-------l'opérateur ET : && ou AND ----------
si la combinaison emailuser et email correspond ET la combinaison mdpuser et mdp correspond.
--->Dans cette condition les 2 doivent obligatoirement correspondre por être validée.
EX. if(emailuser==email && mdpuser==mdp){...}

---------l'opérateur OU : || ou OR -----------------
si la combinaison emailuser et email correspond ET/OU la combinaison mdpuser et mdp correspond.
--->Dans cette condition au moins l'une des deux correspondre por être validée.
EX. if(emailuser==email || mdpuser==mdp){...}

---------l'opérateur "!"" : ou encore NOT  -----------------
l'opérateur "!"signifie le contaire de ...ou NOT

var monutilisateurestapprouvé= true;
if(!monutilisateurestapprouvé){....}: Mon utilisateur n'est pas approuvé.

reviens à écrire :
if(monutilisateurestapprouvé==false){.....}
*/ 