import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { _Function } from "src/app/models/Function";
import { debounceTime, tap, switchMap, finalize } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { FunctionService } from "src/app/admin/services/function.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-add-function",
  templateUrl: "./add-function.component.html",
  styleUrls: ["./add-function.component.scss"],
})
export class AddFunctionComponent implements OnInit {
  editorOptions = { theme: "vs-dark", language: "javascript" };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  tags: Array<string> = [];
  functionCTRL = new FormControl();
  filteredFunctions: Array<any>;
  isLoading: boolean = false;
  functionFG: FormGroup;
  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private _fn: FunctionService
  ) {}

  ngOnInit() {
    this.functionCTRL.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.filteredFunctions = [];
          this.isLoading = true;
        }),
        switchMap(value =>
          this.http
            .get(
              `${environment.SERVER_BASE_URL}functions/searchFunction?name=${value}`
            )
            .pipe(
              finalize(() => {
                this.isLoading = false;
              })
            )
        )
      )
      .subscribe(data => {
        this.filteredFunctions = new Array(data);
      });
    this.setupFunctionFG();
  }

  setupFunctionFG() {
    this.functionFG = this._fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(
      this.filteredFunctions.find(f => f._name === this.functionCTRL.value)
    );
    this._fn.saveFunction(
      new _Function(
        this.functionFG.get("name").value,
        this.functionFG.get("description").value,
        JSON.stringify({ tags: this.tags }),
        this.code,
        (JSON.parse(
          localStorage.getItem(environment.localstorage_key)
        ) as User).id
      ),
      this.filteredFunctions.find(f => f._name === this.functionCTRL.value)._id
    );
  }
}
