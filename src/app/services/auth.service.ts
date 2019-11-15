import { Injectable } from '@angular/core';
import { _User } from '../models/_User';
import { environment } from 'src/environments/environment';
import { firebase} from 'firebaseui-angular';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public commonService: CommonService,
    public router: Router
  ) { }

  /**
   * @Function Save User in LocalStorage
   * @param user
   */
  login(user: _User){
    localStorage.setItem(environment.localstorage_key, JSON.stringify(user));
  }

  getUser(): any {
    return localStorage.getItem(`${environment.localstorage_key}`);
  }

  /**
   * @Funciton Remove actual user in LocalStorage
   */
  logout(){
    firebase.auth().signOut();
    localStorage.removeItem(environment.localstorage_key);
    this.commonService.openSnackBar("Sesión Cerrada Correctamente","OK");
    this.router.navigate(['home']);
  }

  /**
   * @Function Check if user is loguin
   */
  isLogin(): boolean{
    let user = localStorage.getItem(environment.localstorage_key);
    return (user !== null ? true : false);
  }
}
