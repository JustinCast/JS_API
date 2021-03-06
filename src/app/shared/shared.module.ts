import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatRippleModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatChipsModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipsModule
  ]
})
export class SharedModule {}
