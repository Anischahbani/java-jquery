/****************Les Boucles*************/ 
//--La boucle FOR
//--pour i=1 ; tant que i <= strictement inférieur ou egaleà 10 ; alors j'incrémente i de 1.
for(let i=1 ; i<=10; i++){
    document.write('<p>Instruction executée:<strong>'+ i +'</strong></p>');
}
document.write('<hr>');

var j=1;
while(j<=10){
    document.write('<p>Instruction executée:<strong>'+ j +'</strong></p>');
//-Attention a ne pas oublie l'incementation
j++;
}

/*Exercice
Supposons le tableau suivant:
*/
var prenom=['Jean','Marc','Matthieu','Luc','Pierre','Paul','hugo'];

//-- consigne : grace a une boucle FOR  affichez la liste des prénoms du tableau suivant dans la console ou sur votre page.

for(let i=0 ; i<=6; i++){
console.log(prenom[i]); 
}
console.log('---');
console.log(prenom);
for(let i=0; i<prenom.lenght; i++){
    console.log(prenom[i]);
}

console.log('----');
var j=0;
while(j<prenom.length){
    console.log(prenom[j]);
    j++;
}

console.log('----');
//--Meme exercice avecla boucle ForEach
//--Attention a la performance !!

prenom.forEach(afficheprenom);

function afficheprenom(prenom,indice){
    console.log(prenom);
}