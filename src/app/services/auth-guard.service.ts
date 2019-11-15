import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(
    public authService:AuthService,
    public router: Router
  ) { }
  /**
   * @Function Guard to router auth
   */
  canActivate() {
    if (!this.authService.isLogin()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
