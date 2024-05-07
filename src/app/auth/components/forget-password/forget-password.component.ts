import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(
    private _ToastrService: ToastrService,
    private _AuthService: AuthService,
    private _Router: Router
  ) {}

  ngOnInit() {}

  onSubmit(forgetForm: FormGroup) {
    this._AuthService.requestToChangePassword(forgetForm.value).subscribe({
      next: (res) => console.log(res),
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.info('Please Check Your E-mail', 'HEADS UP');
        this._Router.navigate(['/auth/reset']);
      }
    })
  }
}
