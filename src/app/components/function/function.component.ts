import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/app/services/function.service';
import { _Function } from 'src/app/models/_Function';
import { MatDialog } from '@angular/material';
import { ViewCodeComponent } from '../view-code/view-code.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
  searchText;
  constructor(
    public functionService: FunctionService,
    public commonService: CommonService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.functionService.getAllFunctions();
  }

  /**
   * @function open dialog to view code of function
   * @param item
   */
  viewCode(item: _Function){
    this.dialog.open(ViewCodeComponent,{
      width: '80%',
      height: '80%',
      data : item
    });
  }
}
