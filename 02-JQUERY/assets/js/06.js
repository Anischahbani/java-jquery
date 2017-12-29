//--Initialisation de jQuery
$(()=>{
    //--Les flemmard.js

    function l(e){ console.log(e)}

    //--Je souhaite sélectionner toutes mes Divs

    l($('div'));

    //--Je souhaite selectioner mon menu
    l($('nav'));

    //-- Je souhaite connaitre tous les elements descendants direct(enfant) qui sont dans le menu ...
    l($('nav').children());

    //-- Je souhaite parmis ces enfant , uniquement les element"ul"
    l($('nav').children('ul'));
   
    //-- Je souhaite récupérer tous les élements "li" de mon "ul"
    l($('nav').children('ul').find('li'));

    //--Je souhaite récupérer uniquement le 2éme élément de mes "li"
    l($('nav').children('ul').find('li').eq(1));

    //--Je souhaite connaitre le voisin immediat de mon menu
    l($('nav').next());
    l($('nav').next().next());//--le voisin du voisin
    l($('nav').prev());//--le voisin d'avant

    //--Le parent
    l($('nav').parent());
    
    //--Les parents
    l($('nav').parents());

});


