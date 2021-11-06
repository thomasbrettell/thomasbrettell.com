import {Vector} from "p5";

const sketch = (p5) => {
  const MOVERS_AMOUNT = p5.int(p5.random(1, 100));
  const WEIGHT = 5;

  class Attractor {
    constructor(m) {
      this.pos = p5.createVector(p5.width / 2, p5.height / 2);
      this.mass = m;
      this.r = 100;
      this.g = 5;
    }

    display() {
      p5.fill(135, 50);
      p5.noStroke();
      p5.circle(this.pos.x, this.pos.y, this.r);
    }

    attract(obj) {
      let force = Vector.sub(this.pos, obj.pos);

      let dist = force.mag();
      dist = p5.constrain(dist, 15, 75);

      force.normalize();
      let m = (this.g * obj.mass * this.mass) / (dist * dist);
      force.mult(m);

      obj.applyForce(force);
    }
  }

  class Mover {
    constructor(x, y, m) {
      this.pos = p5.createVector(x, y);
      this.vel = Vector.random2D();
      this.acc = p5.createVector(0, 0);
      this.mass = m;
      this.r = p5.sqrt(this.mass) * 4;
      this.topSpeed = 10;
      this.maxForce = 0.25;

      this.aAcc = 0;
      this.aVel = 0;
      this.angle = 0;
    }

    display() {
      p5.stroke(1);
      p5.strokeWeight(1);
      p5.noFill();

      this.angle = this.vel.heading();

      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate(this.pos.x, this.pos.y);
      p5.rotate(this.angle);
      p5.line(0, 0, this.r, 0);
      p5.rect(0, 0, this.r * 2, this.r);
      p5.pop();
    }

    applyForce(force) {
      let f = Vector.div(force, this.mass);
      this.acc.add(f);
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.topSpeed);
      this.pos.add(this.vel);
      console.log(this.pos);
      this.acc.set(0, 0);
    }

    headTo(obj) {
      let force = Vector.sub(obj.pos || obj, this.pos);
      force.setMag(this.topSpeed);
      force.sub(this.vel);
      this.applyForce(force);
    }
  }

  p5.setup = () => {
    p5.createCanvas(600, 600);

    p5.attractor = new Attractor(50);

    p5.movers = [];
    for (let i = 0; i !== MOVERS_AMOUNT; i++) {
      p5.movers.push(
        new Mover(p5.random(p5.width), p5.random(p5.height), WEIGHT)
      );
    }
  };

  p5.draw = () => {
    p5.background(255);

    // p5.attractor.display();

    p5.movers.forEach((mover, index) => {
      if (index + 1 === p5.movers.length) {
        mover.headTo(p5.movers[0].pos);
      } else {
        mover.headTo(p5.movers[index + 1].pos);
      }
      p5.attractor.attract(mover);
      mover.update();
      mover.display();
    });
  };

  p5.mousePressed = () => {
    p5.movers.push(new Mover(p5.mouseX, p5.mouseY, WEIGHT));
  };
};

export default sketch;
