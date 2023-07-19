import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  error: any;
  contact!: Contact;
  myForm!: FormGroup;
  listCategories : Category[] | undefined;
  category : Category | undefined;
  constructor(public apiService : ApiService, public router : Router, private formBuilder: FormBuilder){
   //this.training = new Training(0,"","",0,1);
   this.myForm = this.formBuilder.group({
    //id : [0, Validators.required],
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phone : ['', [Validators.required, Validators.maxLength(10)]],
    address : ['',[Validators.required,Validators.minLength(25)]],
    category : ['', Validators.required]
  })}
  ngOnInit(): void {
    this.apiService.getCategories().subscribe({
      next: (data) => (this.listCategories= data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
addContact(myForm : FormGroup){
  if(myForm.valid){
    this.category = new Category(myForm.value.category.name, myForm.value.category.id)
    this.contact = new Contact(myForm.value.firstName,myForm.value.lastName,myForm.value.email,myForm.value.phone,myForm.value.address, this.category);
    this.apiService.postContact(this.contact).subscribe((res)=>console.log(res));
    this.router.navigateByUrl('contacts');
  }
  else{
    this.error = "Vous n'avez pas saisi correctement les champs";
  }
}
getCategoryById(myForm : FormGroup) : any{
 this.apiService.getCategoryById(myForm.value.categoryId).subscribe({
    next: (data) => {(console.log(data));},
    error: (err) => (this.error = err.message),
    complete: () => (this.error = null),
  });
}

}
