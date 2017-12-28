/*************Les fonctions***************/

//--Déclarer une fonction
//-- Cette fonction ne retourne aucune valeur

function ditbonjour(){
    /**Lors de l'appel de cette fonction les instruction ci dessous seront exécutées */
    alert("bonjour!!");

}

    /**je vais appeler ma fonction "ditbonjour" et déclencher ses instructions */
    ditbonjour();

//--Déclarer une fonction qui prend une variable en paramètre

function bonjour(prenom, nom){
document.write("<P> Bonjour <strong> "+ prenom + nom + "</stong>!</p>");
}

//--Apeler/ utiliser une fonction avec des paramètres
bonjour('Anis','CHAHBANI');

//--Exercice
//Creez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre 

function addition(nb1,nb2){
    return nb1+nb2 ;
}

document.write("<P>"+ addition(10,5) +"<p>");