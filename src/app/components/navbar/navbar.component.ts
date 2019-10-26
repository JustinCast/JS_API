import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  /***
   * @Function Open Dialog to Login or Logout
   */
  checkAuth() {
    switch(this.authService.isLogin()){
      case true:  this.authService.logout();break; // Logout
      case false: this.dialog.open(LoginComponent, {});break; // Login
    }

  }

}
