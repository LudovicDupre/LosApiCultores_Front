import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  contact!:Contact;
  error:null | undefined;
  listCategories: Category[] | undefined;
  constructor(private apiService:ApiService, private route : Router) {}

  ngOnInit():void {
    this.contact=history.state.contact;
    this.apiService.getCategories().subscribe({

      next: (data) => (this.listCategories= data),

      error: (err) => (this.error = err.message),

      complete: () => (this.error = null),

    })
  }

  onEditContact(){
    this.apiService.postContact(this.contact).subscribe({

      next: () => (this.route.navigate(['/contacts'])),
      error: (err: any) =>(console.error("Erreur pendant la modification : ", err)),
      complete: () => (this.error = null)

    })
  }
}
