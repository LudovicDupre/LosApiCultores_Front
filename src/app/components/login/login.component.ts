import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  error: any |undefined;

  constructor(private formBuilder: FormBuilder, private apiService : ApiService) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  onLogin(myForm: FormGroup) {
    if(myForm.valid) {
      this.apiService.connectUser(myForm.value.username, myForm.value.password).subscribe({
        next: (data) => {let test = data;console.log(test)},
        error: (err) => this.error = err.message,
        complete: () => this.error = null
      })
      
    } else {
      this.error = 'Veuillez entrer tous les champs requis.'
    }
  }

}
