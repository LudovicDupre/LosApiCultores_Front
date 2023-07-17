import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] | undefined;
  categories: Category[] | undefined;
  searchForm: FormGroup;
  searchError: any;
  error:any;


  constructor(private service: ApiService) {
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
    this.service.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }



  getAllContacts() {
    this.service.getContacts().subscribe({
      next: (data) => {
        console.log(data)
        this.contacts = data
        this.searchError =""
        this.searchForm.reset();
      },
      error: (err) => this.error = err.message,
      complete: () => this.error = null

    })
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
            this.searchError =""
          }
        },
        error: (err) => this.error = err.message,
        complete: () => this.error = null

      })
    }

  }


}
