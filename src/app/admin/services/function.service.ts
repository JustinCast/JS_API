import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private _http: HttpClient) { }

  getFunctions(name: string) {
    return this._http.get(``)
  }
}
