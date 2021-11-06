const sketch = (p5) => {
  p5.x = 0;
  p5.y = 0;
  p5.xspeed = 10;
  p5.yspeed = 3;

  p5.setup = () => {
    p5.createCanvas(500, 500);
  };

  p5.draw = () => {
    p5.prevy = p5.y;
    p5.prevx = p5.x;

    p5.x = p5.x + p5.xspeed;
    p5.y = p5.y + p5.yspeed;

    if (p5.x > p5.width || p5.x < 0) {
      p5.xspeed = p5.xspeed * -1;
    }
    if (p5.y > p5.height || p5.y < 0) {
      p5.yspeed = p5.yspeed * -1;
    }

    p5.strokeWeight(2)
    p5.line(p5.prevx, p5.prevy, p5.x, p5.y);
  };
};

export default sketch;
