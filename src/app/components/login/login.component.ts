import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure, FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { UserService } from 'src/app/services/user.service';
import { _User } from 'src/app/models/_User';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:Boolean = false;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private commonService: CommonServiceService,
    private userService:UserService,
    public router: Router
  ) {
   }

  ngOnInit() {
  }
  /**
   * @Function if Success Login
   * @param signInSuccessData
   */
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.loadingSwitch(true); // Active loading
    // Create user Format
    let user: _User = new _User(
      signInSuccessData.authResult.user.providerData[0].uid,
      signInSuccessData.authResult.user.providerData[0].email,
      signInSuccessData.authResult.user.providerData[0].photoURL,
      signInSuccessData.authResult.user.providerData[0].displayName
    )
    // Register User
    this.userService.registerUser(user).subscribe(data => {
      user.id = data[0].saveuser; // Set id
      localStorage.setItem(environment.localstorage_key, JSON.stringify(user)); // Save User in Local Storage

      this.loadingSwitch(false); // Hide loading

      // Call SnackBar
      this.commonService.openSnackBar(`Bienvenido ${user.name}`, "OK");

      // Close Dialog
      this.dialogRef.close();

      this.router.navigate(['dashboard']);
    });
  }

  /**
  * @Function if Error Login
  * @param errorData
  */
  errorCallback(errorData: FirebaseUISignInFailure) {
    this.commonService.openSnackBar(`Error al ingresar o registrarse : ${errorData}`, "OK");
    // Close Dialog
    this.dialogRef.close();
  }

  /**
   * @Function Switch loading pass action
   * @param action: boolean
   */
  loadingSwitch(action){
    this.loading = action;
  }

}
