import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { _Function } from "src/app/models/Function";
import { CommonService } from "src/app/services/common.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class FunctionService {
  constructor(private _http: HttpClient, private _common: CommonService) {}

  getFunctions(name: string) {
    return this._http.get(``);
  }

  saveFunction(fn: _Function) {
    this._http
      .post(`${environment.SERVER_BASE_URL}functions/saveFunction`, fn)
      .subscribe({
        next: () =>
          this._common.openSnackBar("Función agregada correctamente", "Ok"),
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
