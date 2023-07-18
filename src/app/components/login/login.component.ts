import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode = 0;
  myForm: FormGroup;
  error: any | undefined;

  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private router: Router) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  onLogin(myForm: FormGroup) {
    if (myForm.valid) {
      this.authService.connectUser(myForm.value.username, myForm.value.password).subscribe({
        next: (data) => {
          let jwtToken = data.headers.get('Authorization');
          console.log(jwtToken);
          this.authService.saveToken(jwtToken);
          this.router.navigateByUrl('contacts')
        },
        error: (err) => this.mode = 1,
        complete: () => this.error = null
      }
      )

    } else {
      this.error = 'Veuillez entrer tous les champs requis.'
    }
  }

  onLogOut() {
    this.authService.logOut()
    this.router.navigateByUrl('contacts'); // contact avec fictifs
  }

}
