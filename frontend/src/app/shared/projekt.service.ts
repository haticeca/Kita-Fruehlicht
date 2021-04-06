import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Projekt} from "./Projekt";

@Injectable({
  providedIn: 'root'
})
export class ProjektService {
  baseUrl = 'http://localhost:3000/projekte';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Projekt[]>{
    return this.http.get<Projekt[]>(this.baseUrl);
  }
  getDataById(projektId: number): Observable<Projekt> {
    return this.http
      .get<Projekt>(this.baseUrl + '/' + projektId);
  }
  update(dataId: number, data: Projekt): void {
    this.http.put<Projekt>(this.baseUrl + '/' + dataId, data)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }
  create(data: Projekt): void {
    this.http.post<Projekt>(this.baseUrl, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  deleteOne(projektId: number): void {
    this.http.delete<Projekt>(this.baseUrl + '/' + projektId)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }
}
