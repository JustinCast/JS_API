import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { _Function } from 'src/app/models/_Function';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit {

  editorOptions;
  script: string;
  code: string;
  constructor(
    public dialogRef: MatDialogRef<ViewCodeComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public item: _Function
  ) { }

  ngOnInit() {
    this.script = `<script src="${environment.SCRIPT_BASE_URL}dinamicAPI/getFunctionById?id=${this.item.id}"></script>`
    this.editorOptions = {theme: 'vs-dark', language: 'javascript', readOnly: true};
    this.code = this.item.code;
  }

}
