import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  getContactsByCategory(id: any) {
    return this.http.get<Contact[]>(environment.host+"/contacts/category/"+id)
  }


  getCategories() {
   return this.http.get<any>(environment.host+"/category");
  }

  constructor(private http: HttpClient) { }



  // afficher toutes les contacts
  getContacts() {
    return this.http.get<Contact[]>(environment.host + "/contacts");
  }


  saveUser(user: User) {
  return this.http.post<User>(environment.host+"/users", user)
  }
}
