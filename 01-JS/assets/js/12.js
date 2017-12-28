/*************La Manipulation Des Contenus**************/

function l(e){
    console.log(e);
}
//--Je souhaite récupérer mon lien : comment procéder?
var google=document.getElementById('google');
l(google);

//-- Maintenant je souhaite accéder aux informations de ce lien ...
    //-- A: le lien vers lequel pointe la balise
    l(google.href)
    //--B: L'ID de la balise
    l(google.id)
    //--C: la classe de la balse
    l(google.className)
    //--D: le texte de la balise
    l(google.textContent)

    /**Maintenant je souhaite modifier le contenu de mon lien 
     * Comme une variable classique , je vais simplement venir affecter une nouvelle valeur .
     * **/

    google.textContent="Mon lien vers Google!";



    /*********Ajouter un element dans ma page ***************/

    /**
     * Nous allons utiliser 2 méthodes :
     * 1. La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ;
     * que je pourrais par la suite modifier avec les méthodes que nous venons de voir.
     * PS: Ce nouvel élément est placé en mémoire. 
     **/
    //--Définition de l'element
     var span =document.createElement('span');
     //--Si je souhaite lui donner un ID
     span.id="monspan";
     //--sije souhaite lui attribuer du contenu..
     span.textContent="Mon Beau Texte en JS!";
     //--comment ajouter l'élement dans la page ?
     //--La fonction appendchild() va permettre de rajouter un enfant à un  élement du DOM.
     google.appendChild(span);


     //--Exercice---
     /**En partant du travail deja réalisé sur la page.
      * Créez directement dans la page une balise <h1></h1> ayant comme contenu:
      "Titre de mon Article".

      Dans cette balise vous créerez un lien vers une url de votre choix.
      Bonus :Ce lien sera de couleur rouge et non souligné.
      */
    //--Creation de la balise h1
      var h1 = document.createElement('h1');
    //--Creation de la balise a
      var a = document.createElement('a');
    //--Titre de mon article
      a.textContent="Titre de mon article";
    //--Donner un lien a mon lien
      a.href="#"
    //--appendChild()
        //--Je met mon lien (a) dans mon h1
         h1.appendChild(a);
        //--Je met mon h1 dans ma page, dans mon body
        document.body.appendChild(h1);
    //--Correction du bonus
        //--  Je veux que mon lien soit de couleur rouge
        a.style.color="red";
        //-- Je veux que mon lien ne soit pas souligné
        a.style.textDecoration="none";