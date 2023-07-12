import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] | undefined;
  error: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }


  getAllContacts() {
    this.service.getContacts().subscribe({
      next: (data) => this.contacts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null

    })
  }


}
