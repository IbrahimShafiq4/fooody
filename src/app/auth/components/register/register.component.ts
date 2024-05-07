import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IRegister } from '../../models/Auth';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  toggleRegister: boolean = false;
  // Start Variables

  // used for opening the popup of the verifying account
  openPopUp: boolean = false;

  // used for storing the userName
  userName: string = '';

  // used for storing the images
  files: File[] = [];

  // used for storing images src to the `imgSrc` variable
  imgSrc: any;

  // used for changing the password and confirmPassword to change its type
  passwordVisibilityToggle: { [id: number]: boolean } = {};

  // End Variables

  // Start Forms
  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z][A-Za-z0-9]*[0-9]$/),
    ]),

    email: new FormControl(null, [Validators.required, Validators.email]),

    country: new FormControl(null, [Validators.required]),

    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
      Validators.maxLength(12),
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),

    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this),
    ]),
  });

  adminForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z][A-Za-z0-9]*[0-9]$/),
    ]),

    email: new FormControl(null, [Validators.required, Validators.email]),

    country: new FormControl(null, [Validators.required]),

    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
      Validators.maxLength(12),
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),

    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this),
    ]),
  });

  verifyForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [
      Validators.required,
      Validators.maxLength(4),
      Validators.minLength(4),
    ]),
  });
  // End Forms

  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
  ) {}

  ngOnInit(): void {

    // Adding events to the document to close up the popup
    document.addEventListener('click', (e) => {
      if (e.target && (e.target as HTMLElement).classList.contains('pop-up')) {
        this.openPopUp = false;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.openPopUp = false;
      }
    });

    // // Extract the values of userName and email from their respective input fields
    this.registerForm.get('email')?.valueChanges.subscribe((email) => {
      // Set the retrieved email value to the 'email' input field within the 'verifyForm' using the setValue method that inside the Forms
      this.verifyForm.get('email')?.setValue(email || null);
    });

    // Store the userName value into the 'userName' variable
    this.registerForm.get('userName')?.valueChanges.subscribe((userName) => {
      this.userName = userName || '';
    });

  }

  // Password and confirm password Match Function
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const confirmPassword = control.value;
    const password = this.registerForm?.get('password')?.value;

    if (password !== confirmPassword) {
      return { passwordMisMatch: true };
    }

    return null;
  }

  // Registration Function
  onRegister(registrationForm: FormGroup) {
    const registrationFormData = new FormData();
    Object.entries<string>(registrationForm.value).forEach(([key, value]) => {
      registrationFormData.append(key, value);
    });
    registrationFormData.append('profileImage', this.imgSrc);

    // Convert registerData array to an object of type IRegister
    const registerData: { key: string; value: any }[] = [];
    registrationFormData.forEach((value, key) => {
      registerData.push({ key: key, value: value });
    });

    const registrationObject: IRegister = {
      userName: '',
      email: '',
      country: '',
      phoneNumber: '',
      profileImage: '',
      password: '',
      confirmPassword: '',
    };

    registerData.forEach(({ key, value }) => {
      registrationObject[key as keyof IRegister] = value;
    });

    this._AuthService.register(registrationObject).subscribe({
      next: (res) => {  },
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success(
          'Account Registered Successfully',
          'Success'
        );

        setTimeout(() => {
          this.openPopUp = true;
        }, 500);
      },
    });
  }

  onCreateAdmin(adminForm: FormGroup) {
    const registrationFormData = new FormData();
    Object.entries<string>(adminForm.value).forEach(([key, value]) => {
      registrationFormData.append(key, value);
    });
    registrationFormData.append('profileImage', this.imgSrc);

    // Convert registerData array to an object of type IRegister
    const registerData: { key: string; value: any }[] = [];
    registrationFormData.forEach((value, key) => {
      registerData.push({ key: key, value: value });
    });

    const registrationObject: IRegister = {
      userName: '',
      email: '',
      country: '',
      phoneNumber: '',
      profileImage: '',
      password: '',
      confirmPassword: '',
    };

    registerData.forEach(({ key, value }) => {
      registrationObject[key as keyof IRegister] = value;
    });

    this._AuthService.creatingAdmin(registrationObject).subscribe({
      next: (res) => {  },
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success(
          'Account Registered Successfully',
          'Success'
        );

        setTimeout(() => {
          this.openPopUp = true;
        }, 500);
      },
    });
  }

  // Verification Function
  onVerify(verificationForm: FormGroup) {
    this._AuthService.verifyUserAccount(verificationForm.value).subscribe({
      next: (res) => {},
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Account Verified Successfully', 'Success');
        setTimeout(() => {
          this.openPopUp = false;
        }, 500);
      },
    });
  }

  // Selecting image using ngx-dropzone
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  // removing image using ngx-dropzone
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
