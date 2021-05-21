import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserServiceService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar) {
  }

  isFirstSignInAttempt = false;
  CodeVerificationError = 'Code verification error';
  InvalidUserPasswordError = 'Invalid username or password';
  EmptyAttempts = 'EmptyAttempts';
  MaxFailedAttempts = 'MaxFailedAttempts';
  Success = 'Success sign in! ;)';
  Access = 'Access';
  MaxAttemptsMessage = 'Maximum number of attempts exceeded';

  ngOnInit(): void {
  }

  openErrorSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      panelClass: ['red-snackbar']
    });
  }

  openSuccessSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      panelClass: ['green-snackbar']
    });
  }

  onSubmit(signIn: NgForm): void {
    if (signIn.valid) {
      const user = new User(signIn.value);
      if (this.isFirstSignInAttempt) {
        this.userService.verify(user)
          .subscribe(data => {
              if (data.okMessage) {
                this.openSuccessSnackBar(this.CodeVerificationError, this.Access);
              } else {
                this.openErrorSnackBar(this.InvalidUserPasswordError, this.Access);
              }
            },
            () => {
              this.openErrorSnackBar(this.CodeVerificationError, this.Access);
            });
      } else {
        this.userService.signIn(user)
          .subscribe(data => {
            console.log(data);
            if (data.okMessage) {
              if (data.okMessage === this.EmptyAttempts) {
                this.isFirstSignInAttempt = true;
              } else if (data.okMessage === this.MaxFailedAttempts) {
                this.openErrorSnackBar(this.CodeVerificationError, this.Access);
              } else {
                this.openSuccessSnackBar(this.Success, this.Access);
              }
            } else {
              this.openErrorSnackBar(this.InvalidUserPasswordError, this.Access);
            }
          }, () => {
            this.openErrorSnackBar(this.InvalidUserPasswordError, this.Access);
          });
      }
    }
  }
}
