import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from './user-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserServiceService {
  // serviceUrl = 'http://localhost:3000';
  serviceUrl = 'https://j105nj8177.execute-api.us-east-1.amazonaws.com/default';
  sigInUrl = `${this.serviceUrl}/sign-in`;
  sigUpUrl = `${this.serviceUrl}/sign-up`;
  verifyUrl = `${this.serviceUrl}/verify`;

  constructor(private http: HttpClient) {
  }

  signIn(user: User): Observable<User> {
    return this.http.post<User>(this.sigInUrl, user, httpOptions)
      .pipe(
        map(data => {
          localStorage.setItem('signInState', JSON.stringify(user));
          return data;
        }),
        catchError(UserServiceService.handleError)
      );
  }
  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.sigUpUrl, user, httpOptions)
      .pipe(
        catchError(UserServiceService.handleError)
      );
  }
  verify(user: User): Observable<User> {
    return this.http.post<User>(this.verifyUrl, user, httpOptions)
      .pipe(
        catchError(UserServiceService.handleError)
      );
  }

  private static handleError(error: HttpErrorResponse): Observable<User> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user.ts-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
