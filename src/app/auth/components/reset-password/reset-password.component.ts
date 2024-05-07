import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  // Object to toggle password visibility
  passwordVisibilityToggle: { [id: number]: boolean } = {};

  // Form group for the reset password form
  resetPassword = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]), // Email form control with validation
    seed: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]), // Seed form control with validation for OTP
    password: new FormControl(null, [
      // Password form control with validation
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),

    confirmPassword: new FormControl(null, [
      // Confirm password form control with custom validation
      Validators.required,
      this.passwordMatchValidator.bind(this),
    ]),
  });

  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}

  ngOnInit() {}

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword = control.value;
    const password = this.resetPassword?.get('password')?.value;

    if (password !== confirmPassword) {
      return { passwordMisMatch: true };
    }

    return null;
  }

  // Function to handle form submission
  onReset(resetFormData: FormGroup) {
    this._AuthService.resetPassword(resetFormData.value).subscribe({
      next: (res) => {  },
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Password Changed Successfully', 'Success');
        this._Router.navigate(['/auth'])
      }
    })
  }
}
