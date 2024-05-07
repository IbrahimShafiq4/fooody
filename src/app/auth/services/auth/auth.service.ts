import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IDecryptedToken,
  ILogin,
  ILoginResponse,
  IPasswordChanged,
  IRegister,
  IResetPassword,
  IUserDetails,
  IUserFiltration,
  IUsers,
  IUserVerify,
} from '../../models/Auth';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {
    // Check if userToken exists in localStorage, if yes, get user profile
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  role: string = ''; // Variable to store user role

  // Function to handle user login

  // Function To handle user login
  login(loginData: ILogin): Observable<ILoginResponse> {
    return this._HttpClient.post<ILoginResponse>('Users/Login', loginData);
  }

  // Function to handle user registration
  register(registrationData: IRegister): Observable<{ message: string }> {
    return this._HttpClient.post<{ message: string }>('Users/Register', registrationData);
  }

  // Function to create admin user
  creatingAdmin(adminData: IRegister): Observable<{ message: string }> {
    return this._HttpClient.post<{ message: string }>('Users/Create', adminData);
  }

  // Function to delete user
  deleteUser(userId: number): Observable<{ message: string }> {
    return this._HttpClient.delete<{ message: string }>(`Users/${userId}`);
  }

  // Function to get user details
  getUser(userId: number): Observable<IUserDetails> {
    return this._HttpClient.get<IUserDetails>(`Users/${userId}`);
  }

  // Function to verify user account
  verifyUserAccount(verificationData: IUserVerify): Observable<{ message: string }> {
    return this._HttpClient.put<{ message: string }>('Users/verify', verificationData);
  }

  // Function to get current user details
  getCurrentUser(): Observable<IUserDetails> {
    return this._HttpClient.get<IUserDetails>('Users/CurrentUser');
  }

  // Function to get All Users or Filter the Users
  getAllUsers(usersParams: IUserFiltration): Observable<IUsers> {
    return this._HttpClient.get<IUsers>('Users', { params: usersParams })
  }

  // Function to update user profile
  updateUserProfile(updateData: IRegister): Observable<{ message: string }> {
    return this._HttpClient.put<{ message: string }>('Users', updateData);
  }

  // Function to change user password
  changePassword(passwordData: IPasswordChanged): Observable<{ message: string }> {
    return this._HttpClient.put<{ message: string }>('Users/ChangePassword', passwordData)
  }

  // Function to request password change
  requestToChangePassword(requestEmail: string):  Observable<{ message: string }>{
    return this._HttpClient.post<{ message: string }>('Users/Reset/Request', requestEmail)
  }

  // Function to reset user password
  resetPassword(passwordData: IResetPassword): Observable<{ message: string }> {
    return this._HttpClient.post<{ message: string }>('users/Reset', passwordData);
  }

  // Function to get user profile from token
  getProfile() {
    let encoded: string | null = localStorage.getItem('userToken');
    if (encoded != null) {
      let decoded: IDecryptedToken = jwtDecode(encoded);
      localStorage.setItem('role', decoded.userGroup);
      localStorage.setItem('userName', decoded.userName);
      this.getRole(); // Get user role
    }
  }

  // Function to get user role from localStorage
  getRole() {
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null) {
      this.role = localStorage.getItem('role') ?? '';
    }
  }
}
