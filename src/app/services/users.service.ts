import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly endpoint = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number, id?: number): Observable<UserModel[]> {
    let params = new HttpParams().append('page', page);

    let url = id ? this.endpoint + '/' + id : this.endpoint;

    return this.http.get(url, { params }).pipe(
      map((res: any) => {
        return id ? [{ ...res.data }] : res.data;
      })
    );
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get(this.endpoint + '/' + id).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
