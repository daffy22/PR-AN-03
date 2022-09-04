import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string = environment.baseUrl;
  private _users: User[] = [];

  get getUsers() {
    return [ ...this._users ];
  }

  constructor(private http: HttpClient) {
    this.http.get<User[]>(`${ this._baseUrl }/users`)
      .subscribe( resp => {
        this._users = resp;
      })
  }

  deleteUser( id: string ) {
    return this.http.delete<User>(`${ this._baseUrl }/users/${ id }`);
  }

  getUser( id: string ) {
    return this.http.get<User>(`${ this._baseUrl }/users/${ id }`);
  }

  getUsersLength(): number {
    return this._users.length;
  }

  patchUser( user: User ) {
    const id = user.id;
    return this.http.patch<User>(`${ this._baseUrl }/users/${ id }`, user);
  }

  postUser( user: User ) {
    return this.http.post<User>(`${ this._baseUrl }/users`, user);
  }

}
