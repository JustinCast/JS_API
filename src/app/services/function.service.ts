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
      this.http.get<Array<_Function>>(`${environment.SERVER_BASE_URL}functions/getAllFunctions`).subscribe({
        next: (data : Array<_Function>) => {
          this.functions = data;
        }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
      });
  }
}
