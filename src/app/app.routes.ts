// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { AdminListComponent } from './features/admins/admin-list/admin-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'admins', component: AdminListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }
];


// import { Routes } from '@angular/router';

// export const appRoutes: Routes = [
//   { path: 'users', loadComponent: () => import('./features/users/users.component').then(m => m.UsersComponent) },
//   { path: 'admins', loadComponent: () => import('./features/admins/admins.component').then(m => m.AdminsComponent) },
//   { path: 'products', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
//   { path: '', redirectTo: 'users', pathMatch: 'full' },
//   { path: '**', redirectTo: 'users' }
// ];
