import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MonacoEditorModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MonacoEditorModule
  ]
})
export class SharedModule {}
