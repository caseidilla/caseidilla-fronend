import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material";

// import { AlertService, UserService } from '../_services/index';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent {
  hide = true;
  hideConf = true;
  loginFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required
  ]);
  secretFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private router: Router,
    private http: HttpClient,
    public snackBar: MatSnackBar) {

  }

  onRegistrateClick(login: string, secret: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      this.snackBar.open("Passwords should match", null, {duration: 3000});
      return;
    }
    this.http.post(`api/register`, {login: login, password: password, secret: secret}).subscribe(
      () => {
        this.router.navigate(["messenger"], {queryParams: {login: login}});
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(error.error, null, {duration: 3000});
      }
    );
  }

  onCancelClick() {
    this.router.navigate(['login']);
  }
}

