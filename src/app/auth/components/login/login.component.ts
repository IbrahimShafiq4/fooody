import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  // Variable to toggle password visibility
  hide: boolean = true;
  userName: string = ''

  constructor(
    private _AuthService: AuthService, // AuthService for authentication
    private _ToastrService: ToastrService, // ToastrService for displaying toast messages
    private _Router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') ?? ''
  }

  // Define login form with email and password fields
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]), // Email field with required and email validators
    password: new FormControl(null, [
      // Password field with required, pattern, and minLength validators
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
      Validators.minLength(8),
    ]),
  });

  // Method to handle login form submission
  onLogin(data: FormGroup) {
    this._AuthService.login(data.value).subscribe({
      // Call AuthService's login method with form data
      next: (response) => {
        // Handle response from login API call
        localStorage.setItem('userToken', response.token); // Store user token in local storage
      },
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._AuthService.getCurrentUser().subscribe({
          next: (res) => {
            this.userName = res.userName;
          },
          error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
          complete: () => this._ToastrService.success(`Welcome back ${this.userName}`, 'Success')
        })
        this._Router.navigate(['/dashboard']);
      }
    });
  }
}
