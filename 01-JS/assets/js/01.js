/*alert('wow ! Tu es sur ma page!');
 alert('Tu es le bienvenue');

// deux slash pour faire un commentaire uniligne
/* sur plusieurs lignes

raccourci : CTRE + /
      OU : CTRL+ SHIFT +/
 */
 //--1 Déclarer une variable en JS
 var Prenom ;
 // --2 Affecter une valeur 
 Prenom="Marie";
 // --3 Afficher la valeur de ma variable dans la console du navigateur.
 console.log(Prenom);   

 /* ------------------------------------------------------------------------------
    |                         Les types de variables                              |
    ------------------------------------------------------------------------------*/ 
// "typeof" me permet de connaitre le type de ma varibla
    console.log(typeof Prenom);
//-- Declaration et affectation d'une valeur à une variable
var age =22;

//--Afficher dans la console 
console.log(age);

//-- vérifier son type
console.log(typeof age);

/*   -----------------------------------------------------------------------------
    |                         La portee des variables   
    |                          |                                                  
    | les varibles déclarées directement à la racines de fichier appelées varibles|
    |globales                                                                     |
    | Elles sont dispponibles de l'ensemble de votre document y compris dans      |
    | les fonctions et les boucles
    | La portée des variables globales s'arrete au fichier.
    | si je change de page
    |  les variables n'existent plus
    | Les variables declarees a l'iterieurs d'une fonction sont appellées variables
    |  locales
    | Elles sont disponibles uniquement a l'interieurr de celles-ci
    ------------------------------------------------------------------------------*/ 

    //-- Les varibles de type FLOAT

    var unedecimale=-2.984;
    console.log(unedecimale);
    console.log(typeof unedecimale);

    //-- Les Booléens (vrai/Faux)
    
    var unbooleen= false; //--True
    console.log(unbooleen);
    console.log(typeof unbooleen);

    /*   -----------------------------------------------------------------------------
    |                              Les constantes  

    la déclartion CONST permet de créer une constante accessible uniquement en lecture ...
    sa valeur ne pourra pas etre modifiee pas des reaffectaion ultérieures
    une coonstante ne peut pas etre déclarée a nouvean.
    Generalemnt par convention les constante sont en majuscules.
    ------------------------------------------------------------------------------*/ 

    const HOST="locahost";
    const USER="root";
    const PASW="mysql";
    
    // je n epeux pas faire cela
    // user ="127.0.0.1"
    // typeError:assignment to constant variable.
    
      /*   -----------------------------------------------------------------------------
    |                                La minute info 

    Au fur et a mesure que l'on affecte ou ré affecte des valeurs à une varibles celle 
    ci prend la nouvelle valeur et le nouveau type

    En Javascript( EMCA Script -ES) les variables sont auto-typées

    pour convvertir une variable de type number en string et string en number 
    je peux utiliser les fonctions natives de javascrips
    ------------------------------------------------------------------------------*/ 
    
    console.log();

    var unnombre= "24";
    console.log(unnombre);
    console.log(typeof unnombre);
    
    // --la fonction parseInt permet de retourner un ENTIER à partir d'un STRING
    
    unnombre=parseInt(unnombre);
    console.log(unnombre);
    console.log(typeof unnombre);
    // -- je reaffecte une valeur à ma varible
    unnombre="12.55";
    console.log(unnombre);
    console.log(typeof unnombre);

    //-- la fonction parseFloat permet de retourner un Float à partir d'un string
    
    unnombre=parseFloat(unnombre);
    console.log(unnombre);
    console.log(typeof unnombre);

    //-- conversion d'un nombre en sting avec toSting()

    var unnombrequidevientstring=10;
    console.log(unnombrequidevientstring);
    console.log(typeof unnombrequidevientstring);
    console.log(typeof unnombrequidevientstring.toString() );