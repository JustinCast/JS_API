import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FunctionService } from "src/app/admin/services/function.service";
import { HttpErrorResponse } from "@angular/common/http";
import { _Function } from 'src/app/models/Function';
import { functions } from 'firebase';

@Component({
  selector: "app-show-functions",
  templateUrl: "./show-functions.component.html",
  styleUrls: ["./show-functions.component.scss"],
})
export class ShowFunctionsComponent implements OnInit {
  _functions: Array<_Function>;
  constructor(private _auth: AuthService, private _function: FunctionService) {}

  ngOnInit() {
    let user = JSON.parse(this._auth.getUser());
    this._function.getFunctionsByUser(user.id).subscribe({
      next: data => {
        console.log(data)
        this._functions = data;
      },
      error: (err: HttpErrorResponse) => console.log(err),
    });
  }
}
