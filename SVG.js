class SVG{
    constructor(){
        this.text = text,
        this.shape = shape,
		this.textColor = textColor,
		this.shapeColor = shapeColor

		if (text.length < 3) {
			console.error(err('Must contain at least 3 letters.'));
		}
    }

    render() {
		return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
		<${this.shape} cx="150" cy="100" fill="${this.shapeColor}" />
		<text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
		  ${this.text}
		</text>
	  </svg>`;
	}
}


module.exports = {SVG}
