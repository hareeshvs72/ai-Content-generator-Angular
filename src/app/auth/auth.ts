import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  isLogin:boolean = false
  router = inject(Router)

  goSignIn(){
    this.isLogin = true
  }
  createAccount(){
      this.isLogin = false
  }

}
