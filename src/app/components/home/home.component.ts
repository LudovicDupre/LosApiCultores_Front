import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: Contact[] = [{ id: 1, firstName: "Toto", lastName: "Titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata" },
  ]


  ngOnInit(): void {

  }

}
