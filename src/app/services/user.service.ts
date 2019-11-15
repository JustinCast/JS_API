import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private authService:AuthService) { }

  /**
   * @Function Register User in DB but if exist doesn't save
   * @param user_fire
   * @return Observable
   */
  registerUser(user: User): Observable<any> {
    return this.http.post('http://localhost:5000/users/saveUser',user);
  }


}