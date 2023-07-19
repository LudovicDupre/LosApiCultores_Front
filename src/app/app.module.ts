import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

import { AddContactComponent } from './components/add-contact/add-contact.component';

import { AuthServiceService } from './services/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
