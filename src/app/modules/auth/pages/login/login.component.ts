import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalAuthService } from '@services/global-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetPasswordModal = false;
  constructor( 
    private router: Router,
    private authServiceGlobal: GlobalAuthService
  ) { }

  ngOnInit() {
    if (this.authServiceGlobal.isLogin) {
      this.router.navigate(['/']);// не знаю нужно ли было редиректить куда-то, но мне показалось странным просто проверить зарегистрирован ли пользователь
    }
  }
}
