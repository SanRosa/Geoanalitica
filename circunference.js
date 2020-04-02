class Circunference {

	// Constructor
	constructor(h, k, radius) {
		this.h = h;
		this.k = k;
		this.radius = radius;
		this.C = -2 * h;
		this.D = -2 * k;
		this.F = Math.pow(h, 2) + Math.pow(k, 2) - Math.pow(radius, 2);
	}

	// returns string tuple with center coordinates
	getCenter(){
		return "(" + this.h + ", " + this.k + ")";
	}

	// returns current radius
	getRadius(){
		return this.radius;
	}

	// Builds string with ordinary form of circunference
	toStringOrdinaryLatex() {
		let xTerms = "(x-" + this.h + ")^{2}";
		let yTerms = "(y-" + this.k + ")^{2}";
		if(this.h === 0) {
			xTerms = "x^{2}";
		}
		if(this.k === 0) {
			yTerms= "y^{2}";
		}
		return (xTerms + "+" + yTerms + "=" + Math.pow(this.radius, 2)).replace(/\-\-/g, "+");
	}

	// Builds string with general form of circunference
	toStringGeneralLatex() {
		let xTerms = this.C + "x+";
		let yTerms = this.D + "y+";
		if(this.C === 0) {
			xTerms = "";
		}
		if(this.D === 0) {
			yTerms = "";
		}
		return ("x^{2}+y^{2}+" + xTerms + yTerms + this.F.toString() + "=0").replace(/\+\-/g, "-");
	}

	generalToOrdinaryLatexStrings() {
		return [
			this.toStringGeneralLatex(),
			this.intermediateSteps(),
			this.toStringOrdinaryLatex()
		]
	}

	intermediateSteps() {
		let xTerms = "x^{2}+" + this.C + "x+\\mathbf{" + Math.pow(this.C / 2, 2) + "}+";
		let yTerms = "y^{2}+" + this.D + "y+\\mathbf{" + Math.pow(this.D / 2, 2) + "}";
		let rightHandSide = - this.F + "+\\mathbf{" + Math.pow(this.C / 2, 2) + "}+\\mathbf{" + Math.pow(this.D / 2, 2) + "}";
		if(this.C === 0){
			xTerms = "x^{2}+";
		}
		if(this.D === 0){
			yTerms = "y^{2}";
		}
		return (xTerms + yTerms + "=" + rightHandSide).replace(/\+\-/g, "-");
	}	

}

myCircle = new Circunference(1,-3,5);

console.log(myCircle.toStringOrdinaryLatex());

for(let i = 0; i < myCircle.generalToOrdinaryLatexStrings().length; i++) {
	console.log(myCircle.generalToOrdinaryLatexStrings()[i]);
}
