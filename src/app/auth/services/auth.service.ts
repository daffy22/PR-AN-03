import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/dashboard/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _auth: User | undefined;

  get auth(): User {
    return { ...this._auth! } ;
  }

  constructor( private http: HttpClient ) { }

  isActive(): Observable<boolean> {
    if ( !localStorage.getItem('token') )
      return of(false);

    return this.http.get<User>(`${ this._baseUrl }/users/1`)
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  login() {
    return this.http.get<User>(`${ this._baseUrl }/users/1`)
      .pipe(
        tap( userAuth => this._auth = userAuth ),
        tap( userAuth => localStorage.setItem('token', userAuth.id) ),
      );
  }

  logout() {
    localStorage.removeItem('token');
    this._auth = undefined;
  }
}
