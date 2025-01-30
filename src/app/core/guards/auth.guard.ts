import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/users']);  
      return true;  // ถ้ามี token สามารถเข้าใช้งานหน้าได้
    } else {
      this.router.navigate(['/login']);  // ถ้าไม่มี token ให้ไปที่หน้า login
      return false;
    }
  }
}
