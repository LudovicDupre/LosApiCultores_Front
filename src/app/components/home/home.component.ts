import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category = new Category( "Amis", 7);

  contacts: Contact[] = [{ id: 1, firstName: "Toto", lastName: "Titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata",category : this.category },
  ]


  ngOnInit(): void {

  }

}
