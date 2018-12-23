import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";
import {FormControl, Validators} from '@angular/forms';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  // selector: 'login'
})


export class LoginComponent {
  hide = true;
  loginFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  onLoginClick(login: string, password: string) {
    this.http.post(`api/login`, {login: login, password: password}).subscribe(
      () => {
        this.router.navigate(["messenger"], {queryParams: {login: login}});
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(error.error, null, {duration: 3000});
      }
    );
  }

  onRegistrateClick

  () {
    this.router.navigate(["registration"])
  }
}
