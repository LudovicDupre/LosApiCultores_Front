import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm: FormGroup ;
  error : string | undefined;

  ngOnInit(): void {
  }

  onLogin() {
    if(this.myForm.valid) {
      this.apiService.saveUser(this.myForm.value.username, this.myForm.value.password)
      console.log(this.myForm.value)
    } else {
      this.error = 'Veuillez entrer tous les champs requis.'
    }
  }
  constructor( private formBuilder: FormBuilder , private apiService: ApiService) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
