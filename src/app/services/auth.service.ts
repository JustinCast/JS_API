import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

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
    localStorage.removeItem(environment.localstorage_key);
  }

  /**
   * @Function Check if user is loguin
   */
  isLogin(){
    let user = localStorage.getItem(environment.localstorage_key);
    return (user !== null ? true : false);
  }

}
