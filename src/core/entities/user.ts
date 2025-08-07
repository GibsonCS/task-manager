export default class User {
  private name: string;
  private username: string;
  private password: string;

  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
