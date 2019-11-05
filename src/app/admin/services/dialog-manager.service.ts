import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditFunctionComponent } from '../components/dashboard/edit-function/edit-function.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(private dialog: MatDialog) { }

  public openPickLocationDialog(toEdit: any): Observable<any> {
    let dialogRef: MatDialogRef<EditFunctionComponent>;
    dialogRef = this.dialog.open(EditFunctionComponent, {
      width: `${window.innerWidth < 400 ? "99%" : "50%"}`,
      height: `${window.innerHeight <= 812 ? "55%" : "50%"}`,
      panelClass: "dialog",
      data: toEdit
    });
    return dialogRef.afterClosed();
  }
}
