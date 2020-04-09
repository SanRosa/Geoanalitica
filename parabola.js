class Parabola {

	// Constructor
	constructor(h, k, p, orientation) {
		this.h = h;
		this.k = k;
		this.p = p;
		this.orientation = orientation; //up, down, right or left
		this.C = this.orientation === "up" || this.orientation === "down" ? -2 * h : -2 * k;
		this.D = this.orientation === "up" || this.orientation === "right" ? -4 * p :  4 * p;
		this.F =  Math.pow(h, 2) - this.D * k;
	}

	// returns string tuple with center coordinates
	getVertex(){
		return "(" + this.h + ", " + this.k + ")";
	}

	// returns full orientation
	getOrientation() {
		return this.orientation;
	}

	getLatusRectum() {
		return this.p * 4;
	}

	getDir() {
		let dir = "";
		switch (this.orientation) {
			case "up":
				dir = "y=" + this.h - this.p;
				break;
			case "down":
				dir = "y=" + this.h + this.p;
				break;
			case "right":
				dir = "x=" + this.k - this.p;
				break;
			case "left":
				dir = "x=" + this.k + this.p;
				break;
		}
		return dir;
	}

	getFocus() {
		let f = "";
		switch (this.orientation) {
			case "up":
				f = "(" + this.h + "," + this.k + this.p + ")";
				break;
			case "down":
				f = "(" + this.h + "," + this.k - this.p + ")";
				break;
			case "right":
				f = "(" + this.h + this.p + "," + this.k + ")";
				break;
			case "left":
				f = "(" + this.h - this.p + "," + this.k + ")";
				break;
		}
		return dir;
	}

	// Builds string with ordinary form of circunference
	toStringOrdinaryLatex() {
		let cuadraticTerms = "(x-" + this.h +")^{2}";
		let nonCuadraticTerms = 4 * this.p + "(y-" + this.k + ")";
		if(this.orientation === "down"){
			nonCuadraticTerms = "-" + nonCuadraticTerms;
		}else if(this.orientation === "right"){
			cuadraticTerms = cuadraticTerms.replace("x", "y");
			nonCuadraticTerms = nonCuadraticTerms.replace("y", "x");
		}else if(this.orientation === "left"){
			cuadraticTerms = cuadraticTerms.replace("x", "y");
			nonCuadraticTerms = "-" + nonCuadraticTerms.replace("y", "x");
		}
		return (cuadraticTerms + "=" + nonCuadraticTerms).replace(/\-\-/g, "+").replace(/\-\+/g, "-");
	}

	// Builds string with general form of circunference
	toStringGeneralLatex() {
		let cuadraticTerms = "x^{2}+" + this.C +"x";
		let linearTerms = this.D + "y";
		if(this.h === 0){
			cuadraticTerms = "x^{2}";
		}
		if(this.orientation === "right" || this.orientation === "left"){
			cuadraticTerms.replace(/x/g, "y");
			linearTerms = linearTerms.replace("y", "x");
		}
		return (cuadraticTerms + linearTerms + "+" + this.F + "=0").replace(/\+\-/g, "-");
	}

}

myParabola = new Parabola(1,-3, 2 ,"up");

// get container
var container = document.getElementsByClassName("container")[0];
var textNode = document.createTextNode("\\[" + myParabola.toStringOrdinaryLatex() + "\\]");
container.appendChild(textNode);
textNode = document.createTextNode("\\[" + myParabola.toStringGeneralLatex() + "\\]");
container.appendChild(textNode);
