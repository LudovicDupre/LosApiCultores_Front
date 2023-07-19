
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private host = "http://localhost:8080";

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getContactsByNameContains(keyword: string) {
    return this.http.get<Contact[]>(environment.host + "/contacts/search/" + keyword, { headers: new HttpHeaders({ 'Authorization': this.authService.getToken() }) })
  }


  getContactsByCategory(id: any) {
    return this.http.get<Contact[]>(environment.host + "/contacts/category/" + id, { headers: new HttpHeaders({ 'Authorization': this.authService.getToken() }) })
  }

  getCategories() {
    return this.http.get<any>(environment.host + "/category", { headers: new HttpHeaders({ 'Authorization': this.authService.getToken() }) });
  }

  // afficher toutes les contacts
  getContacts() {
    let headers = new HttpHeaders({ 'Authorization': this.authService.getToken() })
    console.log(headers)
    return this.http.get<Contact[]>(environment.host + "/contacts", { headers });
  }

  saveUser(user: User) {
    return this.http.post<User>(environment.host + "/users", user)
  }

  deleteContact(contact: Contact) {
    console.log("request :")
    console.log(environment.host + "/contacts/" + contact.id);
    return this.http.delete<Contact>(environment.host + "/contacts/" + contact.id, { headers: new HttpHeaders({ 'Authorization': this.authService.getToken() }) });
  }

}
