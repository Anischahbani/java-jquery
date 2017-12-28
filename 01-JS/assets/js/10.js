/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/
var premiertrimestre=[
{
    prenom:"hugo",
    nom:"LIEGEARD",
    moyenne:{
            francais:12,
            math:19,
            physique:4,
    }

},
{
    prenom:"pierre",
    nom:"hermes",
    moyenne:{
            francais:15,
            math:18,
            physique:15,
            espagnol:12,
    }

},
{
    prenom:"jean",
    nom:"pierre",
    moyenne:{
            francais:12,
            math:12,
            physique:9,
    }

},
{
    prenom:"adam",
    nom:"smith",
    moyenne:{
            francais:14,
            math:13,
            physique:6,
    }

},
{
    prenom:"chris",
    nom:"evans",
    moyenne:{
            francais:11,
            math:13,
            physique:3,
    }

}


];

//--flemard
function w(ceciestunparametredemafonction){
    document.write(ceciestunparametredemafonction);
}
function l(e){
    console.log(e);
}
//--------------------------------
l(premiertrimestre);
w('<ol>');
//--Je souhaite afficher la liste de mes etudiants.
for(let i=0 ; i< premiertrimestre.length ; i++){
    //--on récupère l'objet étudiant de l'itération
    let etudiant= premiertrimestre[i];
    //--Apercu dans la console
    l(etudiant);
    //--ici mes variables seront remises a 0 a chaque nouveau etudiant (itération).
    var nombredematiere=0 , sommedesnotes=0;

    //--Afficher le prenom et le nom d'un etudiant
    w('<li>');
    w(etudiant.prenom+' '+etudiant.nom);
    //--Afficher la moyenne de l'étudiant aux différentes matières 
   w('<ul>');
    for(let matiere in etudiant.moyenne){
        l(matiere);
        l(etudiant.moyenne[matiere]);

        nombredematiere++;
        sommedesnotes += etudiant.moyenne[matiere];
     
        w('<li>');
            w(matiere+' '+etudiant.moyenne[matiere]);
        w('</li>')
    }//--fin de la boucle matiere
    w('<li>');
        w('<strong>moyenne générale  :</strong> ' + (sommedesnotes/nombredematiere).toFixed(2));
    w('</li>');
    w('</ul>');
    w('</li>');
}//--fin de la boucle etudiant
w('</ol>');







