import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { _Function } from 'src/app/models/_Function';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit {

  editorOptions;
  code: string;
  constructor(
    public dialogRef: MatDialogRef<ViewCodeComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public item: _Function
  ) { }

  ngOnInit() {
    this.editorOptions = {theme: 'vs-dark', language: 'javascript'};
    this.code = this.item.code;
  }

}
