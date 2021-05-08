export class User {
  username: string;
  email: string;
  password: string;

  constructor(user: any = {}) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }
}
