import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FirebaseUIModule } from "firebaseui-angular";
import { firebase, firebaseui } from "firebaseui-angular";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from "./components/login/login.component";
import { AdminModule } from "./admin/admin.module";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { FunctionComponent } from "./components/function/function.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import {
  MonacoEditorModule,
  NgxMonacoEditorConfig,
  NGX_MONACO_EDITOR_CONFIG,
} from "ngx-monaco-editor";
// search module
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ViewCodeComponent } from "./components/view-code/view-code.component";
import monacoConfig from './monaco-config';

firebase.initializeApp(environment.firebaseConfig);
/**
 * Config Firebase Auth UI
 */
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FunctionComponent,
    PageNotFoundComponent,
    ViewCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    MonacoEditorModule.forRoot(monacoConfig),
    Ng2SearchPipeModule,
  ],
  providers: [
    /*{ provide: NGX_MONACO_EDITOR_CONFIG, useValue: monacoConfig }*/
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, ViewCodeComponent],
})
export class AppModule {}
