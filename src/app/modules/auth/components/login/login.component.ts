import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { GlobalAuthService } from 'src/app/global-services/global-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private authServiceGlobal: GlobalAuthService
  ) { }

  ngOnInit() {
    if (this.authServiceGlobal.isLogin) {
      this.router.navigate(['/']);// не знаю нужно ли было редиректить куда-то, но мне показалось странным просто проверить зарегистрирован ли пользователь
    }
  }

  onSubmit() {
    this.authService.login({ ...this.loginForm.value }).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

}
