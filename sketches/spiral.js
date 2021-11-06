const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(700, 700);
    p.r = 0;
    p.theta = 0;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.x = p.r * p.cos(p.theta);
    p.y = p.r * p.sin(p.theta);

    p.noStroke();
    p.fill(0);
    p.circle(p.x, p.y, 5);

    p.r += 0.1;
    p.theta += 0.1;
  };
};

export default sketch;
