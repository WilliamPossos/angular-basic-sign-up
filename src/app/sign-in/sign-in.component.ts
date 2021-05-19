import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserServiceService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) {
  }
  isFirstSignInAttempt = false;

  ngOnInit(): void {
  }

  onSubmit(signIn: NgForm): void {
    if (signIn.valid) {
      const user = new User(signIn.value);
      this.userService.signIn(user)
        .subscribe(data => {
          console.log(data);
        });
    }
  }
}
