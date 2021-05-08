import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [UserServiceService],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(signUp: NgForm): void {
    if (signUp.valid) {
      const user = new User(signUp.value);
      this.userService.signUp(user)
        .subscribe(() => {});
    }
  }
}
