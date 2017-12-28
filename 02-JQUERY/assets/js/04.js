$( "#MonFormulaire" ).submit(function( event ) {
    //--Cette Fonction anonyme sera executé a la soumission du formulaire
    //--Permet d'annuler l'action par défault du submit du formulaire.(la redirection HTML)
    event.preventDefault();

    $(this).replaceWith('<p>Bonjour ' +$('#nomcomplet').val()+'!</p>');

  });