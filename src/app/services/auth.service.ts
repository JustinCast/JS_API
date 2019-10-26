import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { firebase} from 'firebaseui-angular';
import { CommonServiceService } from './common-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public commonService: CommonServiceService
  ) { }

  /**
   * @Function Save User in LocalStorage
   * @param user
   */
  loguin(user: User){
    localStorage.setItem(environment.localstorage_key, JSON.stringify(user));
  }

  /**
   * @Funciton Remove actual user in LocalStorage
   */
  logout(){
    firebase.auth().signOut();
    localStorage.removeItem(environment.localstorage_key);
    this.commonService.openSnackBar("Sesión Cerrada Correctamente","OK");
  }

  /**
   * @Function Check if user is loguin
   */
  isLogin(): boolean{
    let user = localStorage.getItem(environment.localstorage_key);
    return (user !== null ? true : false);
  }

}
