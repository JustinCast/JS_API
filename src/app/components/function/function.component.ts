import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/app/services/function.service';
import { _Function } from 'src/app/models/_Function';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
  searchText;
  constructor(
    public functionService: FunctionService,
    public commonService: CommonServiceService
  ) {}

  ngOnInit() {
    this.functionService.getAllFunctions();
  }

}
