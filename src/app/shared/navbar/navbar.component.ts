import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private router: Router) {}



  profile() {
    console.log("Profile clicked");
  }

  logout() {
    console.log("Logout clicked");
  }



}


