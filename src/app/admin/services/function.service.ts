import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { _Function } from "src/app/models/Function";
import { CommonService } from "src/app/services/common.service";
import { environment } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FunctionService {
  constructor(
    private _http: HttpClient,
    private _common: CommonService
  ) {}

  /*getFunctions(name: string) {
    return this._http.get(``);
  }*/

  getFunctionsByUser(us_id: number): Observable<_Function[]> {
    return this._http.get<Array<any>>(
      `${environment.SERVER_BASE_URL}functions/getFunctionsByUser/${us_id}`
    );
  }

  saveFunction(fn: _Function, to: number) {
    this._http
      .post(`${environment.SERVER_BASE_URL}functions/saveFunction`, fn)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          if (to) this.saveDependant(data.save_function, to);
          this._common.openSnackBar("Función agregada correctamente", "Ok");
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  }

  updateFn(fn: _Function): Observable<any> {
    return this._http.put<any>(`${environment.SERVER_BASE_URL}functions/updateFn`, fn);
  }

  saveDependant(from: number, to: number) {
    this._http
      .post(`${environment.SERVER_BASE_URL}functions/saveDependant`, {
        from: from,
        to: to,
      })
      .subscribe({
        next: () =>
          this._common.openSnackBar(
            "Depedencias actualizadas correctamente",
            "Ok"
          ),
        error: (err: HttpErrorResponse) => console.log(err),
      });
  }
}
