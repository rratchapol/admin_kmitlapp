// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { AdminListComponent } from './features/admins/admin-list/admin-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { LoginComponent } from './auth/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'admins', component: AdminListComponent },
  { path: 'products', component: ProductListComponent },
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: '**', redirectTo: 'users' }
];

