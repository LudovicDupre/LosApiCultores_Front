import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  // afficher toutes les contacts
  getContacts() {
    return this.http.get<Contact[]>(environment.host + "/contacts");
  }


  saveUser(username: string, password: string) {
    const formData = new FormData;
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post<any>("http://localhost:8080/login", formData)
  }
}
