import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

export const userGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const _Router = inject(Router);
  const _AuthService = inject(AuthService);

  const role = _AuthService.role;

  if (localStorage.getItem('userToken') !== null && role == 'SystemUser') {
    return true;
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};
