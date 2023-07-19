import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'losapicultores_contacts';
  //user: User | undefined;
  auth: boolean = true;

  constructor(private router: Router,public authService: AuthServiceService) {

  }

  ngOnInit(): void {}
}
