import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FunctionService } from "src/app/admin/services/function.service";
import { HttpErrorResponse } from "@angular/common/http";
import { _Function } from "src/app/models/Function";
import { functions } from "firebase";
import { DialogManagerService } from "src/app/admin/services/dialog-manager.service";

@Component({
  selector: "app-show-functions",
  templateUrl: "./show-functions.component.html",
  styleUrls: ["./show-functions.component.scss"],
})
export class ShowFunctionsComponent implements OnInit {
  _functions: Array<any>;
  constructor(
    private _auth: AuthService,
    private _function: FunctionService,
    private _dialog: DialogManagerService
  ) {}

  ngOnInit() {
    let user = JSON.parse(this._auth.getUser());
    this._function.getFunctionsByUser(user.id).subscribe({
      next: data => {
        this._functions = data;
        this._functions.map(f => (f.dep = Number(f.dep)));
      },
      error: (err: HttpErrorResponse) => console.log(err),
    });
  }

  openEditDialog(index: number) {
    this._dialog.openPickLocationDialog(this._functions[index]);
  }
}
