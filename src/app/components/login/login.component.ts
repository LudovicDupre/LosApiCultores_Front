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
  error: string |undefined;

  constructor(private formBuilder: FormBuilder, private apiService : ApiService) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  onLogin() {
    if(this.myForm.valid) {
      this.apiService.connectUser(this.myForm.value.username, this.myForm.value.password)
      console.log(this.myForm.value)
    } else {
      this.error = 'Veuillez entrer tous les champs requis.'
    }
  }

}
