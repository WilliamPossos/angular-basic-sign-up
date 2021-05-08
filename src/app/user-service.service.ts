import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from './user-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserServiceService {
  sigInUrl = 'http://localhost:4000/sign-in';
  sigInUp = 'http://localhost:4000/sign-up';

  constructor(private http: HttpClient) {
  }

  signIn(user: User): Observable<User> {
    return this.http.post<User>(this.sigInUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.sigInUp, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<User> {
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
