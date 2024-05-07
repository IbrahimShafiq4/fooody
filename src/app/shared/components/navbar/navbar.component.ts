import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPasswordChanged, IUserDetails } from 'src/app/auth/models/Auth';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  emptyUserImg: string = '../../../../assets/images/user.png';

  currentUser: IUserDetails = {
    id: 0,
    userName: '',
    email: '',
    country: '',
    phoneNumber: '',
    imagePath: '',
    group: {
      id: 0,
      name: '',
      creationDate: '',
      modificationDate: '',
    },
    creationDate: '',
    modificationDate: '',
  };

  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.onGetCurrentUser();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      data: { name: this.currentUser.userName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onChangePassword(result);
      }
    });
  }

  onChangePassword(passwordData: IPasswordChanged) {
    this._AuthService.changePassword(passwordData).subscribe({
      next: (res) => { console.log(res) },
      error: (error: any) => {
        if (error && error.error && error.error.message) {
          this._ToastrService.error(error.error.message, 'Error');
        } else {
          this._ToastrService.error('An unexpected error occurred', 'Error');
        }
      },
      complete: () => this._ToastrService.success('Password Changed Successfully', 'Success')
    });
  }


  onGetCurrentUser() {
    return this._AuthService.getCurrentUser().subscribe({
      next: (response) => (this.currentUser = response),
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () =>
        this._ToastrService.success(
          'The item was successfully retrieved.',
          'Success'
        ),
    });
  }

  logout() {
    localStorage.clear();
    this._Router.navigate(['/auth']);
  }
}
