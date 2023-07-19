import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {
  private host = "http://localhost:8080";
  private jwtToken: string = "";
  private jwtDecoded: string = "";
  private roles: Array<string> = [];
  public username: string = "";

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupération du token d'authentification (à remplacer par votre code)
    const token = this.getToken();

    // Ajout du token dans les entêtes de la requête
    const authReq = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });

    return next.handle(authReq);
  }

  saveToken(jwtToken: string) {
    console.log('test saveToken');
    this.jwtToken = JSON.stringify(jwtToken);
    localStorage.setItem('token', jwtToken);
    this.jwtDecoded = jwt_decode(this.jwtToken);
    this.username = Object.entries(this.jwtDecoded)[0][1]
    this.roles.push(Object.entries(this.jwtDecoded)[1][1]);
    console.log(this.roles);
    console.log(this.username);
    let admin = this.isAdmin(this.roles);
    console.log(admin)
  }

  isAdmin(roles: Array<String>): boolean {
    if (roles.filter(element => element == 'Admin').length !== 0) return true;
    return false;
  }

  getToken(): string {
    return this.jwtToken = localStorage.getItem('token')!;
  }


  connectUser(username: string, password: string): Observable<any> {
    const formData = new FormData;
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post<any>(this.host + "/login", formData, { observe: 'response' })
  }

  logOut(){
    localStorage.removeItem('token');
  }


}
