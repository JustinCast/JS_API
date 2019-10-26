import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * @Function Register User in DB but if exist doesn't save
   * @param user_fire
   * @return Observable
   */
  registerUser(user_fire: any) {
    // Create user Format
     let user: User = {
      uid: user_fire.uid,
      email: user_fire.email,
      photo: user_fire.photoURL,
      name: user_fire.displayName
    }
    this.http.post('http://localhost:5000/users/saveUser',user).subscribe( data => {
      console.log(data);
    });
  }


}
