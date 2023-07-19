import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';


const routes: Routes = [
  { path: 'contacts', component: ContactComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},

  { path: 'addContact', component: AddContactComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
