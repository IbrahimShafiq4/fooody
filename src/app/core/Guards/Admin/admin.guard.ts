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

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<UrlTree | boolean>
  | Promise<UrlTree | boolean>
  | UrlTree
  | boolean => {
  const _Router = inject(Router);
  const _AuthService = inject(AuthService);

  const role = _AuthService.role;

  if (localStorage.getItem('userToken') !== null && role == 'SuperAdmin') {
    return true;
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};
