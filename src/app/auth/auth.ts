import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from '../service/api';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  isLogin: boolean = false
  router = inject(Router)
  fb = inject(FormBuilder)
  api = inject(Api)
  registeForm: FormGroup = this.fb.group({
    username: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private snackBar: MatSnackBar) { }

  registerUser() {
    // console.log(this.registeForm.get('username')?.valid);
    if (this.registeForm.valid) {
      const username = this.registeForm.value.username
      const email = this.registeForm.value.email
      const password = this.registeForm.value.password

      try {
        this.api.registerUser({ username, email, password }).subscribe({
          next: ((res: any) => {
            // alert("register success fully")
                this.snackBar.open('register success fully!', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            });
            console.log(res);
            this.registeForm.reset()

          }),
          error: ((reason: any) => {
            console.log(reason);
            // alert(reason.error)
            this.snackBar.open(reason.error, 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['error-snackbar']
            });

          })
        })

      } catch (error) {
        console.log(error);

      }
    }
    else {
      // alert("please Chek the form")
      this.snackBar.open('please Check the form!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['info-snackbar']
      });
    }

  }

  loginUSer() {

    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      try {
        this.api.loginUserApi({ email, password }).subscribe({
          next: ((res: any) => {
            console.log(res);
            const user = sessionStorage.setItem("users", JSON.stringify(res.user))
            const token = sessionStorage.setItem("token", JSON.stringify(res.token))
            this.snackBar.open('Login SuccessFully', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            });
            this.router.navigateByUrl('/ai/dashboard')
          }),
          error: ((reason: any) => {
            // alert(reason.error)
            this.snackBar.open(reason.error, 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['error-snackbar']
            });
          })
        })

      } catch (error) {
        console.log(error);

      }

    }
    else {
      // alert("invalid Form")
      this.snackBar.open('invalid Form!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['info-snackbar']
      });
    }
  }

  goSignIn() {
    this.isLogin = true
  }
  createAccount() {
    this.isLogin = false
  }


}
