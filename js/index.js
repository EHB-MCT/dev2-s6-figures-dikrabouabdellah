"use strict";
import Figure from "./Figure.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
//import Square from './Square.js';

const form = {
	changeSelect(e) {},
	init() {
		console.log("Form init!");
		const rectangle = new Rectangle("rectangle", 50, 20);
		console.log(rectangle);
		const circle = new Circle("circle", 20);
		console.log(circle);
	},
	inputElementsWithLabel(label, id) {},
	submitForm(e) {},
};

form.init();
