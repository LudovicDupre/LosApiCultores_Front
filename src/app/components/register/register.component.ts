import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm: FormGroup ;
  error :  any;

  ngOnInit(): void {
  }

  onRegister() {
    if(this.myForm.valid) {
      this.apiService.saveUser(this.myForm.value).subscribe({
        next: (data) => console.log(data),
        error : (err)=> (this.error= err.message),
        complete: () => (this.error=null)
      })
      console.log(this.myForm.value)
      this.router.navigateByUrl('login')
    } else {
      this.error = 'Tous les champs sont requis.'
    }
  }
  constructor( private formBuilder: FormBuilder , private apiService: ApiService, private router : Router) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword : ['', Validators.required]
    }, {
      validators : this.controlValuesAreEqual('password', 'confirmPassword')
    })
  }

  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const formGroup = control as FormGroup
      const valueOfControlA = formGroup.get(controlNameA)?.value
      const valueOfControlB = formGroup.get(controlNameB)?.value

      if (valueOfControlA === valueOfControlB) {
       
        return null
      } else {
        return { valuesDoNotMatch: true}
      }

    }
  }

}
