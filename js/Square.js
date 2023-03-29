import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
	constructor(name, size) {
		super(name);
		this.width = size;
		this.height = size;
	}
}
