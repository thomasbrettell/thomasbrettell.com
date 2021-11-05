import {Vector} from "p5";

const sketch = (p) => {
  const WEIGHT = 20;
  const POINTS_AMOUNT = 100;

  class Point {
    constructor() {
      this.pos = p.createVector(
        p.int(p.random(p.width)),
        p.int(p.random(p.height))
      );
      this.radius = 16;
    }

    display() {
      p.noFill();
      p.circle(this.pos.x, this.pos.y, this.radius);
    }

    reposition() {
      this.pos = p.createVector(
        p.int(p.random(p.width)),
        p.int(p.random(p.height))
      );
    }
  }

  class Mover {
    constructor(x, y, m) {
      this.pos = p.createVector(x, y);
      this.vel = Vector.random2D();
      this.acc = p.createVector(0, 0);
      this.mass = m;
      this.r = p.sqrt(this.mass) * 4;
      this.topSpeed = 40;
      this.maxForce = 0.25;

      this.aAcc = 0;
      this.aVel = 0;
      this.angle = 0;
    }

    display() {
      p.stroke(1);
      p.fill(255, 0, 0);

      this.angle = this.vel.heading();

      p.push();
      p.rectMode(p.CENTER);
      p.translate(this.pos.x, this.pos.y);
      p.rotate(this.angle);
      p.line(0, 0, this.r, 0);
      // p.rect(0, 0, this.r * 2, this.r);
      p.triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
      p.pop();
    }

    applyForce(force) {
      let f = Vector.div(force, this.mass);
      this.acc.add(f);
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.topSpeed);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }

    headTo(obj) {
      let force = Vector.sub(obj.pos || obj, this.pos);
      force.setMag(this.topSpeed);
      force.sub(this.vel);
      this.applyForce(force);
    }

    checkEdges() {
      if (this.pos.x > p.width) {
        this.pos.x = 0;
      } else if (this.pos.x < 0) {
        this.pos.x = p.width;
      }

      if (this.pos.y > p.height) {
        this.pos.y = 0;
      } else if (this.pos.y < 0) {
        this.pos.y = p.height;
      }
    }
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.95, p.windowHeight * 0.95);

    p.points = [];
    for (let i = 0; i !== POINTS_AMOUNT; i++) {
      p.points.push(new Point());
    }

    p.mover = new Mover(p.width / 2, p.height / 2, WEIGHT);
  };

  p.draw = () => {
    p.background(255, 200);

    if (!!p.points.length) {
      p.mover.headTo(p.points[0]);
      p.points.forEach((point, i) => {
        point.display();

        let d = Vector.dist(p.mover.pos, point.pos);
        if (d < p.mover.r / 2 + point.radius) {
          p.points.splice(i, 1);
          // p.points.push(new Point());
        }
      });
    }

    // p.mover.checkEdges()
    p.mover.update();
    p.mover.display();
  };
};

export default sketch;
