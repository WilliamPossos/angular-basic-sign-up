import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(signUp: NgForm): void {
    if (signUp.valid) {
      console.log(signUp.value);
    }
  }
}
