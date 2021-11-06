import {Vector} from "p5";

const sketch = (p5) => {
  const LINE_AMOUNT = 100;

  class Mover {
    constructor() {
      this.location = new p5.createVector(
        p5.int(p5.random(0, p5.width)),
        p5.int(p5.random(0, p5.height))
      );
      this.velocity = new p5.createVector(0, 0);
      this.acceleration = p5.createVector(-0.001, 0.01);
      this.prevLoc = new p5.createVector(this.location.x, this.location.y);
      this.topSpeed = 4;
    }

    display() {
      p5.strokeWeight(2);
      p5.line(this.prevLoc.x, this.prevLoc.y, this.location.x, this.location.y);
    }

    accelerate() {
      this.velocity.add(this.acceleration);
    }

    brake() {
      this.velocity.sub(this.acceleration);
    }

    update() {
      this.prevLoc.x = this.location.x;
      this.prevLoc.y = this.location.y;

      this.mouse = new p5.createVector(p5.mouseX, p5.mouseY);
      
      this.dir = Vector.sub(this.mouse, this.location);
      this.dir.normalize();
      
      this.dir.mult(0.1);
      this.acceleration = this.dir;
      if (p5.mouseIsPressed) {
        this.brake();
      } else {
        this.accelerate();
      }
      this.velocity.limit(this.topSpeed);
      this.location.add(this.velocity);
    }

    checkEdges() {
      if (this.location.x > p5.width) {
        this.prevLoc.x = 0;
        this.location.x = 0;
      } else if (this.location.x < 0) {
        this.prevLoc.x = p5.width;
        this.location.x = p5.width;
      }

      if (this.location.y > p5.height) {
        this.prevLoc.y = 0;
        this.location.y = 0;
      } else if (this.location.y < 0) {
        this.prevLoc.y = p5.height;
        this.location.y = p5.height;
      }
    }
  }

  p5.setup = () => {
    p5.createCanvas(600, 500);
    p5.background(255);

    p5.lines = [];
    for (let i = 0; i !== LINE_AMOUNT; i++) {
      p5.lines.push(new Mover());
    }
  };

  p5.draw = () => {
    p5.background(255, 50);
    for (let i = 0; i !== p5.lines.length; i++) {
      p5.lines[i].update();
      p5.lines[i].checkEdges();
      p5.lines[i].display();
    }
  };
};

export default sketch;
