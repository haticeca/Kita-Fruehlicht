import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Member} from "./Member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = 'http://localhost:3000/members';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl);
  }
  getDataById(memberId: number): Observable<Member> {
    return this.http
      .get<Member>(this.baseUrl + '/' + memberId);
  }
  update(memberId: number, data: Member): void {
    this.http.put<Member>(this.baseUrl + '/' + memberId, data)
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
  create(data: Member): void {
    this.http.post<Member>(this.baseUrl, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  deleteOne(memberId: number): void {
    this.http.delete<Member>(this.baseUrl + '/' + memberId)
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
