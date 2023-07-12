import { Component, OnInit } from '@angular/core';
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
  categories : Category[] | undefined;

  error: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getAllContacts();
    this.getCategories();
  }

  searchByCategory(event : any) {
    let element= event.target || event.srcElement || event.currentTarget;
    let elementId = element.id
    this.service.getContactsByCategory(elementId).subscribe( {
      next: (data) => this.contacts = data ,
      error : (err) => this.error = err.message,
      complete: () => this.error= null
    })}

  getCategories() {
   this.service.getCategories().subscribe({
    next: (data) => this.categories = data ,
    error : (err) => this.error = err.message,
    complete: () => this.error= null
   })
  }


  
  getAllContacts() {
    this.service.getContacts().subscribe({
      next: (data) => {
        console.log(data)
        this.contacts = data},
      error: (err) => this.error = err.message,
      complete: () => this.error = null

    })
  }


}
