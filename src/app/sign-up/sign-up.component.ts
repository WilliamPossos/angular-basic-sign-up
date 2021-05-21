import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [UserServiceService],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Success = 'Success sign in! ;)';
  Access = 'Access';
  Error = 'Something went wrong';
  constructor(private userService: UserServiceService, private snackBar: MatSnackBar) {
  }

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

  onSubmit(signUp: NgForm): void {
    if (signUp.valid) {
      const user = new User(signUp.value);
      this.userService.signUp(user)
        .subscribe(success => {
          this.openSuccessSnackBar(this.Success, this.Access);
          window.location.reload();
        }, error => {
          this.openErrorSnackBar(this.Error, this.Access);
        });
    }
  }
}
