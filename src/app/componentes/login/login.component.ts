import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Login } from '../interfaces/login.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mensagemDeErro: string | null = null;

  constructor(private router: Router, private service: ApiService){}

  onLogin(login:Login[]): void {
    console.log('Login data:', login)
    this.service.login(login).subscribe({
      next: ()=>{
        this.router.navigateByUrl('/home');
      },
      error: (err)=>{
        this.mensagemDeErro=err.error.message;
      }
    })
  }

}