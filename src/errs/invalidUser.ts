export default class InvalidUser extends Error {
  super(errorMessage: string) {
    this.message = errorMessage;
    this.name = "InvalidUser";
  }
}
