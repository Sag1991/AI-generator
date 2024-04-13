import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-otp-screen',
  standalone: true,
  imports: [ InputTextModule, CommonModule],
  templateUrl: './otp-screen.component.html',
  styleUrl: './otp-screen.component.scss'
})
export class OtpScreenComponent {

}
