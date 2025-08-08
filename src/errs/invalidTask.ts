export default class InvalidTask extends Error {
	super(errorMessage: string) {
		this.message = errorMessage;
		this.name = "InvalidTask";
	}
}
