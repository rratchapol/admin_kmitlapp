// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'kmitl_admin';
// }

import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // standalone: false,
  imports: [RouterModule, MatSidenavModule, MatListModule, NavbarComponent, SidebarComponent,HttpClientModule ], // ✅ นำ Material และ RouterModule เข้ามาใช้
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'admin-app';
  
}