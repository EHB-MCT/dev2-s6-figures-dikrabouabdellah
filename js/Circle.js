import figure from "./Figure.js";

export default class Circle extends figure {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}
	get diameter() {
		return this.radius * 2;
	}
	get surfaceArea() {
		return Math.PI * this.radius * this.radius;
	}
	get htmlString() {
		return `<div class="result">
        <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <dl>
            <dt>Radius</dt>
            <dd>RADIUS px</dd>
      
            <dt>Diameter</dt>
            <dd>DIAMETER px</dd>
      
            <dt>Area</dt>
            <dd>AREA px</dd>
      
            <dt>Circumference</dt>
            <dd>CIRCUMFERENCE px</dd>
          </dl>
        </div>
      </div>`;
	}
}
