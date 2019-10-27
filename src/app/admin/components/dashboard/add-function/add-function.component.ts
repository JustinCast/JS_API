import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { _Function } from "src/app/models/Function";
import { debounceTime, tap, switchMap, finalize } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-function",
  templateUrl: "./add-function.component.html",
  styleUrls: ["./add-function.component.scss"]
})
export class AddFunctionComponent implements OnInit {
  editorOptions = { theme: "vs-dark", language: "javascript" };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  tags: Array<string> = [];
  functionCTRL = new FormControl();
  filteredFunctions: any;
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

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
            .get(`${environment.SERVER_BASE_URL}functions/searchFunction?name=${value}`)
            .pipe(
              finalize(() => {
                this.isLoading = false;
              })
            )
        )
      )
      .subscribe(data => {
        this.filteredFunctions = data;

        console.log(this.filteredFunctions);
      });
  }
}
