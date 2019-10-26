import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /**
   * @Function Register User in DB but if exist doesn't save
   * @param user
   */
  registerUser(user_fire: any){
    // Create user Format
     let user: User = {
      uid: user_fire.uid,
      email: user_fire.email,
      photo: user_fire.photoURL,
      name: user_fire.displayName
    }

    //TODO: CALL Server functions


    //TODO: SAVE user in local

  }

}
