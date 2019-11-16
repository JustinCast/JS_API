import { Injectable } from '@angular/core';
import { _User } from '../models/_User';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
  registerUser(user: _User): Observable<any> {
    return this.http.post(`${environment.SERVER_BASE_URL}users/saveUser`,user);
  }


}
