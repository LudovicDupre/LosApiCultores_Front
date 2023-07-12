import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'losapicultores_contacts';
  //user: User | undefined;
  auth: boolean = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (!this.auth) {
      this.router.navigateByUrl('home')
    }
  }
}
