import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  canActivate(): boolean {
    this.router.navigate(['/auth/login']);
    return false;
  }
}
