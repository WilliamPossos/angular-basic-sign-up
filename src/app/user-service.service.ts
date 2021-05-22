import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from './user-model';
import {ResponseModel} from './response-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) {
  }
  // serviceUrl = 'http://localhost:3000';
  serviceUrl = 'https://j105nj8177.execute-api.us-east-1.amazonaws.com/default';
  sigInUrl = `${this.serviceUrl}/sign-in`;
  sigUpUrl = `${this.serviceUrl}/sign-up`;
  verifyUrl = `${this.serviceUrl}/verify`;

  private static handleError(error: HttpErrorResponse): Observable<ResponseModel> {
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

  signIn(user: User): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.sigInUrl, user, httpOptions)
      .pipe(
        map(response => response)
      );
  }
  signUp(user: User): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.sigUpUrl, user, httpOptions)
      .pipe(
        map( response => response)
      );
  }
  verify(user: User): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.verifyUrl, user, httpOptions)
      .pipe(
        map( response => response)
      );
  }
}
