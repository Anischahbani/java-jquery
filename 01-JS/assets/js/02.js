//--Declarer un tableau indexé
var montableau= [];
var myarray   = new Array ;

//-- Affecter des valeurs à un tableau indexé
montableau[0] = "marie";
montableau[1] = "hugo";
montableau[2] = "hamid";

//--afficher le contenu de mon tableau dans la console
console.log(montableau[1]);//--hugo
console.log(montableau[2]);//--hamid

//--Déclarer et affecter des valeurs a un tableau indexé

var nosprenoms = ["Marie","thomas","olivier","riad","hugo","chloé"];
console.log(nosprenoms);

//-- Declarer et affecter des valeurs a un objet 
//-- pas d tableau associatif en js 
var coordonnee = {
    prenom : "Hugo",
    nom    : "Liegeard",
    age    : 28 
};

console.log(coordonnee);
console.log(typeof coordonnee);

//-- je vais créer deux tableaux indexés
var listedeprenoms = ["hugo","marie","lounis","romain"];
var listedenoms = ["liegeard","dupoux","dgaden","elie"];

//--je vais créer un tableauà deux dimensions à partir de mes 2 tableaux prècèdents

var annuaire = [ listedeprenom,listedenoms] ;
console.log(annuaire);

//-- hugo liegeard
console.log(annuaire[0][0]);
console.log(annuaire[1][0]);

var listdeprenoms = [ "anis" ,"lounis"];
var listdenoms = ["chahbani","dgaden"];
var listtel = ["060606","070707" ]  ;

var annuairedesstagiaires = [listedeprenoms, listedenoms ,listdetel ];

console.log(annuairedesstagiaires);
//--correction

var annuairedessatagiaire =[
    {prenom: 'hugo', nom:'liegeard' , tel:'xx xx xx xx xx' },
    {prenom: 'chloé', nom:'thuillier' , tel:'xx xx xx xx xx' },
    {prenom: 'anis', nom:'chahbani' , tel:'xx xx xx xx xx' },
] ;
console.log(annuairedesstagiaires);
console.log(annuairedesstagiaires[1]);
console.log(annuairedesstagiaires[1]['prenom']);
console.log(annuairedesstagiaires[1].prenom);

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

/*----------Ajouter un élement ---------------*/

var couleur =["rouge","jaune","vert"];

/* si je souhaite ajouter un élément dans mon taleau */
/* je fait appela la fonction push() qui me renvoi le nombre d'element de mon tableau que je peux recuperer facultativement 
dans un variable*/
console.log(couleurs);
var nombreelementsdemontableau = couleur.push("orange");
console.log(coleurs);
console.log(nombreelementsdemontableau);

/* 
*NB : la fonction unshift() permet d'ajouter un ou plusieurs elements en debut de tableau
*/


/*---------------------- Récuperer et sortir le dernier élément------------------------------*/
/*
la fonction pop() me permet de supprimer le dernier elemlent de mon tableau et d'en reccuperer la valeur.

la meme chose est possible avec le premier element rn utilisant la fonction shift()

NB : la fonction splice() vous permet de faire sortir un ou plusieurs element de votre tableau .
*/


var mondernierelement= couleur.pop();
console.log(mondernierelement);
console.log(couleurs);