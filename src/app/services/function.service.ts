import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { _Function } from '../models/_Function';
import { CommonService } from './common.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  functions: Array<_Function>;
  constructor(
    private http: HttpClient,
    public commonService: CommonService
  ) {

  }

  /**
   * @Function Register User in DB but if exist doesn't save
   * @param user_fire
   * @return Observable
   */
  getAllFunctions() {
    if(!this.functions)
      this.http.get<Array<_Function>>('http://localhost:5000/functions/getAllFunctions').subscribe({
        next: (data : Array<_Function>) => {
          this.functions = data;
          //this.getJS()
        }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
      });
  }

  getJS() {
    this.http.get<any>(`${environment.SERVER_BASE_URL}functions/returnJS`).subscribe({
        next: (data : any) => {
          console.log(data)
        }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
      });
  }
}
