import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // TODO : protéger les routes par catégory
  // div categories et search faut pas qu'il s'affichent si non authetifié !
  // composant home à supprimer 
  // logout à terminer 

  contacts: Contact[] | undefined;
  categories: Category[] | undefined;
  searchForm: FormGroup;
  searchError: any;
  error: any;



  constructor(private service: ApiService, public authService: AuthServiceService, private router: Router) {
    this.searchForm = new FormGroup({
      keyword: new FormControl()
    })

  }

  ngOnInit(): void {
    this.getAllContacts();
    this.getCategories();
    this.searchForm.reset();
  }

  searchByCategory(event: any) {
    let element = event.target || event.srcElement || event.currentTarget;
    let elementId = element.id
    this.service.getContactsByCategory(elementId).subscribe({
      next: (data) => this.contacts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getCategories() {
    if (this.authService.getToken() == null) this.categories = [];
    else {
      this.service.getCategories().subscribe({
        next: (data) => this.categories = data,
        error: (err) => this.error = err.message,
        complete: () => this.error = null
      })
    }

  }



  getAllContacts() {
    if (this.authService.getToken() == null) {
      let category = new Category("Amis", 7);
      this.contacts = [{ id: 1, firstName: "Toto", lastName: "Titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      { id: 1, firstName: "toto", lastName: "titi", email: "toto@yopmail.fr", phone: "0606060606", address: "25 rue de la kata", category: category },
      ]

    } else {
      this.service.getContacts().subscribe({
        next: (data) => {
          console.log(data)
          this.contacts = data
          this.searchError = ""
          this.searchForm.reset();
        },
        error: (err) => this.error = err.message,
        complete: () => this.error = null

      })
    }

  }

  onSearch(form: FormGroup) {
    if (form.valid) {
      this.service.getContactsByNameContains(form.value.keyword).subscribe({
        next: (data) => {
          if (data.length === 0) {
            this.searchError = "Aucun contact trouvé !"
            this.contacts = [];
          } else {
            this.contacts = data
            this.searchError = ""
          }
        },
        error: (err) => this.error = err.message,
        complete: () => this.error = null
      })
    }

  }


  onDelete(contact: Contact) {
    if (confirm('êtes vous sûr de vouloir supprimer ce contact ? ')) this.service.deleteContact(contact).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => this.error = err.message,
      complete: () => this.getAllContacts()
    })
  }



}
