
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import { Category } from '../models/category.model';

import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements HttpInterceptor {

  private host = "http://localhost:8080";

  constructor(private http: HttpClient, private authService: AuthServiceService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupération du token d'authentification (à remplacer par votre code)
    const token = this.authService.getToken();

    // Ajout du token dans les entêtes de la requête
    const authReq = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });

    return next.handle(authReq);
  }

  getContactsByNameContains(keyword: string) {
    return this.http.get<Contact[]>(environment.host + "/contacts/search/" + keyword)
  }


  getContactsByCategory(id: any) {
    return this.http.get<Contact[]>(environment.host + "/contacts/category/" + id)
  }


  getCategories() {
    return this.http.get<any>(environment.host + "/category");
  }




  // afficher toutes les contacts
  getContacts() {
    return this.http.get<Contact[]>(environment.host + "/contacts");
  }


  saveUser(user: User) {
    return this.http.post<User>(environment.host + "/users", user)
  }

  deleteContact(contact: Contact) {
    console.log("request :")
    console.log(environment.host + "/contacts/" + contact.id);
    return this.http.delete<Contact>(environment.host + "/contacts/" + contact.id);
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
