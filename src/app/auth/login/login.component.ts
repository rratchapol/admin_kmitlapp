import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule,HttpClientModule],  // แค่ FormsModule ก็พอเพราะ ngModel ใช้ในฟอร์ม
  providers: [AuthService] 
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // ถ้าการเข้าสู่ระบบสำเร็จ ให้เก็บ token หรือทำการนำทางไปหน้าอื่น
        localStorage.setItem('token', response.token);
        this.router.navigate(['/products']); // เปลี่ยนเส้นทางไปที่หน้า Dashboard หรือหน้าอื่นที่ต้องการ
      },
      (error) => {
        // จัดการข้อผิดพลาด เช่น แจ้งเตือนผู้ใช้
        console.error('Login failed', error);
      }
    );
  }
}
