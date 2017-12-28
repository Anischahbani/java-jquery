/* les Selecteurs jQuery*/

//--Format : $('selecteur')
//-- En jQuery, tous les selecteurs css sont disponibles..

$(function(){
    //--DOM READY!!

    function l(e){
        console.log(e);
    }

    //--Selectionner les balises SPAN
        //Version javascript
        l(document.getElementsByTagName('span'));
        //version jQuery
        l($('span'));


    //--Selectionner mon Menu:
        //Version Javascript:
        l(document.getElementById('menu'));
        //Version jQuery
        l($('#menu'));
    
    
        //--Selectionner une classe:
        //Version Javascript:
        l(document.getElementsByClassName('MaClasse'));
        //Version jQuery
        l($('.MaClasse'));
    
        //--Selectionner un attribut:
      
        //Version jQuery
        l($("[href='https://www.google.fr'"));
    
});