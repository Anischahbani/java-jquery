//--Importation de "component" via @angular/core
//--Pour déclarer une classe comme composant de notre application , on importe "component" via @angular/core

//--@component est ce qu'on appelle un décorateur .
//--Il va nous permettre de définir 3 paramétres essentiels a notre application 
import { Component } from '@angular/core';
//--Creation d'une interface contact, cela me permet de définir la forme /structure de mes objets contact.
interface Contact{
  id      :number;
  prenom  :string;
  nom     :string;
  email   :string;
}
interface ContactArray{
  [index:number]:Contact;
}

@Component({
  //--Le selecteur (selector) determine la maniere dont le compsant sera affiché dans component.
  //--on écrira dans notre html :<app-root></app-root>
  selector: 'app-root',
  //--"templateUrl" ou "template"est la partie visible de composant .
  templateUrl: './app.component.html',
  //--La déclartion des styles avec "styleUrl"ou "styles"
  styleUrls: ['./app.component.css']
})

//--La classe contient les données du composant, mais aussi son comportement.
//--Dans le contexte MVVM , notre classe correspond au ViewModel.

export class AppComponent {
  //--Déclaration d'une variable title
  title = 'ContactApp';
  //--Déclaration d'un objet contact 
  contact:Contact={
    id:1,
    prenom  :"Anis",
    nom     :"CHAHBANI",
    email   :"anischahbani@gmail.com"
  }
  //--un tableau qui contient une collection de contacts
  contacts=[
    {id:1 , prenom:"Anis",nom:"CHAHBANI"},
    {id:2 , prenom:"Hugo",nom:"LIEGEARD"},
    {id:3 , prenom:"kristie",nom:"SOUKAI"},

  ]
  //--function getNomComplet(UnContact:Contact)
  getNomComplet=(UnContact:Contact)=>{
    return UnContact.prenom+''+UnContact.nom;
  }
  //--Choix de mon utilisateur actif
  contactActif;
  /*
  permet de définir un contact actif 
  @param{Contact} UnContact
  */
  choisirUnContact= (UnContact:Contact)=>{
  this.contactActif=UnContact;
  console.log(this.contactActif);
}
}
