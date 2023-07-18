
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private host = "http://localhost:8080";


  getContactsByNameContains(keyword: string) {
    return this.http.get<Contact[]>(environment.host + "/contacts/search/" + keyword)
  }


  getContactsByCategory(id: any) {
    return this.http.get<Contact[]>(environment.host + "/contacts/category/" + id)
  }


  getCategories() {
    return this.http.get<any>(environment.host + "/category");
  }

  constructor(private http: HttpClient) { }



  // afficher toutes les contacts
  getContacts() {
    return this.http.get<Contact[]>(environment.host + "/contacts");
  }


  saveUser(user: User) {
  return this.http.post<User>(environment.host+"/users", user)
  }

  deleteContact(contact: Contact) {
    console.log("request :")
    console.log(environment.host+"/contacts/" + contact.id);
    return this.http.delete<Contact>(environment.host+"/contacts/" + contact.id);
  }


  connectUser(username: string, password: string) {
    const formData = new FormData;
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post("http://localhost:8080/login", formData)
  }

}
