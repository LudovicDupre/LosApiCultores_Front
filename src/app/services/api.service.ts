import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';
import { User } from '../models/user.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
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

  connectUser(username: string, password: string) {
    const formData = new FormData;
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post("http://localhost:8080/login", formData)
  }
  postContact(contact : any){
   return this.http.post<any>(environment.host+"/addContact",  contact)
  }
  getCategoryById(id : number){
    return this.http.get<Category>(environment.host + "/category/" +id)
  }
}
