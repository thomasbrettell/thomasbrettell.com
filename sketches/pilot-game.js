import { Vector } from 'p5';

const NOT_STARTED = 'NOT_STARTED';
const STARTED = 'STARTED';
const GAME_OVER = 'GAME_OVER';

const INTERVAL_TIME = 4;

const sketch = (p) => {
  let gameState = NOT_STARTED;

  p.startGame = () => {
    gameState = STARTED;
    p.points = 0;
    p.timer = INTERVAL_TIME;
    p.ship.reset();
    p.point.reset();
  };

  class Point {
    constructor() {
      this.pos = p.createVector(
        p.int(p.random(p.width)),
        p.int(p.random(p.height))
      );
      this.radius = 16;
    }

    display() {
      p.noStroke();
      p.fill(255, 0, 0);
      p.circle(this.pos.x, this.pos.y, this.radius);
    }

    reset() {
      this.pos = p.createVector(
        p.int(p.random(p.width)),
        p.int(p.random(p.height))
      );
    }

    reposition() {
      p.points++;
      p.timer = INTERVAL_TIME;
      this.pos = p.createVector(
        p.int(p.random(p.width)),
        p.int(p.random(p.height))
      );
    }
  }

  class Ship {
    constructor() {
      this.pos = p.createVector(p.width / 2, p.height / 2);
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.radius = 16;
      this.r = 0;
      this.theta = 0;
      this.topSpeed = 15;
    }

    reset() {
      this.pos = p.createVector(p.width / 2, p.height / 2);
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.radius = 16;
      this.r = 0;
      this.theta = 0;
      this.topSpeed = 15;
    }

    display() {
      p.fill(0);
      p.push();
      this.r = p.constrain(this.r, 0, this.topSpeed);
      this.pos.x += this.r * p.cos(this.theta);
      this.pos.y += this.r * p.sin(this.theta);
      p.translate(this.pos.x, this.pos.y);

      p.rotate(this.theta);
      p.triangle(
        -this.radius,
        -this.radius / 2,
        -this.radius,
        this.radius / 2,
        this.radius,
        0
      );
      p.pop();
    }

    turn(t) {
      this.theta += t;
    }

    accelerate(a) {
      this.r += a;
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
    p.createCanvas(800, 300);
    p.ship = new Ship();
    p.point = new Point();

    p.points = 0;

    p.timer = INTERVAL_TIME;

    p.startButton = p.createButton('Start game');
    p.startButton.style('transform', 'translate(-50%, -50%)');
    p.startButton.style('left', '50%');
    p.startButton.style('top', '50%');
    p.startButton.style('position', 'absolute');
    p.startButton.style('appearance', 'none');
    p.startButton.style('background', 'none');
    p.startButton.style('border', '1px solid black');
    p.startButton.style('border-radius', '4px');
    p.startButton.style('font-size', '12px');
    p.startButton.mousePressed(p.startGame);

    p.replayButton = p.createButton('Play again');
    p.replayButton.style('transform', 'translate(-50%, -50%)');
    p.replayButton.style('left', '50%');
    p.replayButton.style('top', '50%');
    p.replayButton.style('position', 'absolute');
    p.replayButton.style('appearance', 'none');
    p.replayButton.style('background', 'none');
    p.replayButton.style('border', '1px solid black');
    p.replayButton.style('border-radius', '4px');
    p.replayButton.style('font-size', '12px');
    p.replayButton.mousePressed(p.startGame);
    p.replayButton.hide();
  };

  p.draw = () => {
    p.background(255, 100);
    p.textSize(12);
    p.textAlign(p.LEFT);

    if (gameState === STARTED) {
      p.startButton.hide();
      p.replayButton.hide();
      p.point.display();
      p.fill(0, 0, 0);
      if (p.timer === 1) {
        p.fill(255, 0, 0);
      }
      p.textAlign(p.CENTER);
      p.textSize(16 * (5 - p.timer));
      p.text(p.timer, p.width / 2, 60);
      p.fill(0, 0, 0);
      p.textSize(12);
      p.textAlign(p.LEFT);
      p.text(`Score: ${p.points}`, 20, 20);

      let d = Vector.dist(p.ship.pos, p.point.pos);
      if (d < p.ship.radius + p.point.radius) {
        p.point.reposition();
      }

      if (p.keyIsDown(p.UP_ARROW)) {
        p.ship.accelerate(0.1);
      } else if (p.keyIsDown(p.DOWN_ARROW)) {
        p.ship.accelerate(-0.35);
      } else {
        p.ship.accelerate(-0.05);
      }

      if (p.keyIsDown(p.LEFT_ARROW)) {
        p.ship.turn(-0.1);
      }
      if (p.keyIsDown(p.RIGHT_ARROW)) {
        p.ship.turn(0.1);
      }
      p.ship.checkEdges();
      p.ship.display();

      if (p.frameCount % 60 == 0) {
        p.timer--;
      }
      if (p.timer <= 0) {
        gameState = GAME_OVER;
      }
    } else if (gameState === NOT_STARTED) {
      p.startButton.show();
      p.timer = INTERVAL_TIME;
    } else if (gameState === GAME_OVER) {
      p.textSize(16);
      p.textAlign(p.CENTER);
      p.text(
        `You scored ${p.points} ${p.points === 1 ? 'point' : 'points'}`,
        p.width / 2,
        p.height / 2 - 50
      );
      p.replayButton.show();
    }
  };
};

export default sketch;
