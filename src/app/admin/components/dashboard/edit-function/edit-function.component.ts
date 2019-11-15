import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import * as _ from "lodash";
import { Subscription } from 'rxjs';
import { FunctionService } from 'src/app/admin/services/function.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-edit-function",
  templateUrl: "./edit-function.component.html",
  styleUrls: ["./edit-function.component.scss"],
  encapsulation: ViewEncapsulation.None 
})
export class EditFunctionComponent implements OnInit {
  editorOptions = { theme: "vs-dark", language: "javascript", readOnly: this.fn.dep > 0 ? true: false };
  editSubscription: Subscription;
  aux: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public fn: any,
    public dialogRef: MatDialogRef<EditFunctionComponent>,
    private _fn: FunctionService,
    private _common: CommonService
  ) {
    this.aux = { ...fn };
  }

  ngOnInit() {
  }

  editFn() {
    if(!_.isEqual(this.fn, this.aux))
      this.editSubscription = this._fn.updateFn(this.fn).subscribe({
        next: () => this._common.openSnackBar('Función actualizada con éxito', 'Ok'),
        error: (err: HttpErrorResponse) => this._common.handleError(err)
      });
  }

  ngOnDestroy() {
    if(this.editSubscription)
      this.editSubscription.unsubscribe();
  }
}
