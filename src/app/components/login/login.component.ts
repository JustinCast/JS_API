import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure, FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private commonService: CommonServiceService
  ) {
   }

  ngOnInit() {
  }
  /**
   * @Function if Success Login
   * @param signInSuccessData
   */
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData.authResult.user.providerData[0]);

    // Call SnackBar
    this.commonService.openSnackBar(`Bienvenido `, "OK");
  }

  /**
   * @Function if Error Login
   * @param errorData
   */
  errorCallback(errorData: FirebaseUISignInFailure) {
    this.commonService.openSnackBar(`Error al ingresar o registrarse : ${errorData}`, "OK");
  }

}
