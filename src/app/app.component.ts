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

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatListModule], // ✅ นำ Material และ RouterModule เข้ามาใช้
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-app';
}