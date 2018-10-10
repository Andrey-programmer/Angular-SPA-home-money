import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users?email=${email}`, {
      responseType: 'json'
    }).map((user) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user, {
      responseType: 'json'
    });
  }
}
