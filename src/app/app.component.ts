import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CloudChallenge3';
  showSignInBtn = false;
  showSignUpBtn = true;
  onSignIn = () => {
    this.showSignInBtn = false;
    this.showSignUpBtn = true;
  }

  private onSignUp = () => {
    this.showSignInBtn = true;
    this.showSignUpBtn = false;
  }
}
