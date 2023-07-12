import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

saveUser(username: string , password : string) {
const formData = new FormData;
formData.append("username", username); 
formData.append("password", password);
return this.http.post<any>("http://localhost:8080/login", formData)
}
}
