import { NgModule } from '@angular/core'; // ตรวจสอบการนำเข้า NgModule
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [],  // ระบุคอมโพเนนต์ที่ใช้ในโมดูลนี้
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,  // ใช้ FormsModule สำหรับ ngModel
    CommonModule, BrowserModule,
    HttpClientModule
  ],
  providers: [],
})
export class AuthModule {} // ใช้ @NgModule อย่างถูกต้อง
