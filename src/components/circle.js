// import using require

// declare class

// export class using module.exports
const Shape = require("./shape");

// export class using module.exports

class Circle extends Shape {
  constructor() {
    //first line should be the call to super class constructor with appropriate parameter
    super();
  }
  calculateArea() {
    console.log("Area of circle with color: " + this.color);
    return 3.14 * 5 * 5;
  }
}

module.exports = Circle;
