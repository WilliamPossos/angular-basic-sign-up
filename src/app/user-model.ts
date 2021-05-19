export class User {
  username: string;
  email: string;
  password: string;
  code: string;

  constructor(user: any = {}) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.code = user.code;
  }
}
