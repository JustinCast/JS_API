import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-edit-function",
  templateUrl: "./edit-function.component.html",
  styleUrls: ["./edit-function.component.scss"],
  encapsulation: ViewEncapsulation.None 
})
export class EditFunctionComponent implements OnInit {
  editorOptions = { theme: "vs-dark", language: "javascript" };
  constructor(
    @Inject(MAT_DIALOG_DATA) public fn: any,
    public dialogRef: MatDialogRef<EditFunctionComponent>
  ) {}

  ngOnInit() {
    console.log(this.fn)
  }
}
