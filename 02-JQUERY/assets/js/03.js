/************** Le chainage de methode avec jQuery **********/

$(function(){
        //-- je souhaite cacher toutes les divs de ma page HTML

        console.log($('div'));
        $('div').hide('slow',function(){
            //-- une fois que la methode hide() est terminée mon alerte peux s'executer.
            alert('Fin du Hide');
            //--NB : la fonction s'executera pour l'ensemble des elements du selecteur
      
            $('div').css('background','yellow');
            $('div').css('color','red');

            //--Je fais réaparition de mes DIV
            $('div').show('slow');
        });//--Fin fonction anonyme

$('p').hide(1000).css({'color':"green",'font-size':"20px"}).delay(2000).show(500);


});

