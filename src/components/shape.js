// declare class

// export class using module.exports

class Shape {
  constructor(color) {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a Shape");
  }
  calculateArea() {
    console.log("Don't know area of Unknown Shape");
    return 0;
  }
}

module.exports = Shape;
