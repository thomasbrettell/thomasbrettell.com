import P5JSIcon from './assets/P5JSIcon';
import ReactIcon from './assets/ReactIcon';
import NodejsIcon from './assets/NodeJSIcon';
import { FC } from 'react';

interface SnippetProps {
  icon: FC;
  slug: string;
  title: string;
  description: string;
  sketchId?: string;
  code: string;
}

const snippets: SnippetProps[] = [
  {
    icon: ReactIcon,
    slug: 'usehttp',
    title: 'useHttp',
    description: 'Custom React hook',
    code: `import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : 'GET',
          header: requestConfig.header ? requestConfig.header : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }   
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [applyData]);

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;`,
  },
  {
    title: 'useInput',
    description: 'Custom React hook',
    slug: 'useinput',
    icon: ReactIcon,
    code: `import { useReducer } from "react"

const inputReducer = (state, action) => {
  if(action.type === 'INPUT_CHANGED') {
    return {
      inputValue: action.value,
      inputTouched: state.inputTouched
    }
  }

  if (action.type === 'INPUT_TOUCHED') {
    return {
      inputValue: state.inputValue,
      inputTouched: action.value
    }
  }

  return {
    inputValue: '',
    inputTouched: false
  }
}

const useInput = (validate) => {
  const [inputState, inputStateDispatch] = useReducer(inputReducer, {
    inputValue: '',
    inputTouched: false
  });
  const {inputValue} = inputState
  const {inputTouched} = inputState

  const inputIsValid = validate(inputValue)
  const inputIsInvalid = !inputIsValid && inputTouched

  const inputChangeHandler = (e) => {
    inputStateDispatch({type: 'INPUT_CHANGED', value: e.target.value})
  }

  const inputBlurHandler = () => {
    inputStateDispatch({type: 'INPUT_TOUCHED', value: true})
  }

  const resetInput = () => {
    inputStateDispatch({type: 'INPUT_CHANGED', value: ''})
    inputStateDispatch({type: 'INPUT_TOUCHED', value: false})
  }

  return {
    inputValue,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    resetInput
  }
}

export default useInput;`,
  },
  {
    slug: 'sendgrid',
    title: 'SendGrid',
    description: 'Send HTML email template with SendGrid',
    code: `const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
      process.env.SENDGRID_API_KEY,
    },
  })
);

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const {email, enquiry} = req.body;

  return transporter
    .sendMail({
      to: "yourToEmail",
      from: "yourFromEmail",
      subject: "yourEmailSubject",
      html: "<p>yourHTMLEmailTemplate</p>",
    })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err)
      return res.status(400).json(err);
    });
};

export default handler;`,
    icon: NodejsIcon,
  },
  {
    slug: 'redux-toolkit',
    title: 'Redux Toolkit',
    description: 'Boilerplate for Redux Toolkit with React',
    icon: ReactIcon,
    code: `//store.js
import { configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import counterReducer from './counter-slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store

//auth-slice.js
import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {isAuthed: false},
  reducers: {
    login(state) {
      state.isAuthed = true
    },
    logout(state) {
      state.isAuthed = false
    }
  }
})

export const authActions = authSlice.actions

export default authSlice.reducer

//counter-slice.js
import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0, show: true},
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload
    },
    toggle(state) {
      state.show = !state.show
    }
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer`,
  },
  {
    title: 'Processing Knot',
    slug: 'processing-knot',
    sketchId: 'knot',
    description: 'p5.js sketch',
    code: `import {Vector} from "p5";

const sketch = (p5) => {
  const MOVERS_AMOUNT = 10;
  const GRAVITY = 1;

  class Attractor {
    constructor() {
      this.pos = p5.createVector(p5.width / 2, p5.height / 2);
      this.mass = 300;
      this.r = p5.sqrt(this.mass) * 2;
    }

    display() {
      p5.fill(135);
      p5.circle(this.pos.x, this.pos.y, this.r * 2);
    }

    attract(obj) {
      let force = Vector.sub(this.pos, obj.pos);

      let dist = force.mag();
      dist = p5.constrain(dist, 15, 75);

      force.normalize();
      let m = (GRAVITY * obj.mass * this.mass) / (dist * dist);
      force.mult(m);

      obj.applyForce(force);
    }
  }

  class Mover {
    constructor(m) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = Vector.random2D();
      this.acc = p5.createVector(0, 0);
      this.mass = m;
      this.r = p5.sqrt(this.mass) * 2;
      this.aAcc = 0;
      this.aVel = 0;
      this.angle = 0;
    }

    display() {
      p5.stroke(1);
      p5.strokeWeight(1);
      p5.noFill();

      this.angle = this.vel.heading()

      p5.push();
      p5.rectMode(p5.CENTER);
      p5.translate(this.pos.x, this.pos.y);
      p5.rotate(this.angle);
      p5.line(0, 0, this.r, 0);
      p5.rect(0, 0, this.r * 2, this.r * 2);
      p5.pop();
    }

    applyForce(force) {
      let f = Vector.div(force, this.mass);
      this.acc.add(f);
    }

    update() {
      // let angle = p5.atan(this.vel.y / this.vel.x);

      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // this.aAcc = this.acc.x / 10.0;
      // this.aVel += this.aAcc;
      // // this.aVel = p5.constrain(this.aVel, -0.1, 0.1);
      // this.angle += angle;

      this.acc.set(0, 0);
    }
  }

  p5.setup = () => {
    p5.createCanvas(700, 700);
    p5.attractor = new Attractor();

    p5.movers = [];
    for (let i = 0; i !== MOVERS_AMOUNT; i++) {
      p5.movers.push(new Mover(p5.random(50, 150)));
    }
  };

  p5.draw = () => {
    p5.background(255);

    for (let i = 0; i !== p5.movers.length; i++) {
      p5.movers[i].update();
      p5.movers[i].display();
      p5.attractor.attract(p5.movers[i]);
    }

    p5.attractor.display();
  };
};

export default sketch;`,
    icon: P5JSIcon,
  },
  {
    icon: P5JSIcon,
    slug: 'perlin-noise',
    title: 'Perlin Noise Line',
    description: 'p5.js sketch',
    sketchId: 'perlin-noise',
    code: `const sketch = (p5) => {
const NOISE_AMOUNT = 0.005;
const LINE_AMOUNT = 2

class Line {
  constructor() {
    this.tx = p5.int(p5.random(0, 10000));
    this.ty = p5.int(p5.random(0, 10000));
    this.na = p5.random(NOISE_AMOUNT + NOISE_AMOUNT, NOISE_AMOUNT - NOISE_AMOUNT);
  }

  move() {
    let prevx = this.x;
    let prevy = this.y;
    this.tx = this.tx + NOISE_AMOUNT;
    this.ty = this.ty + NOISE_AMOUNT;
    let nx = p5.noise(this.tx);
    let ny = p5.noise(this.ty);
    this.x = p5.map(nx, 0, 1, 0, p5.width);
    this.y = p5.map(ny, 0, 1, 0, p5.height);

    p5.line(prevx, prevy, this.x, this.y);
    // p5.circle(this.x, this.y, 16);
  }
}

p5.setup = () => {
  p5.createCanvas(500, 300);
  p5.background(255);

  p5.ls = []
  for(let i = 0; i !== LINE_AMOUNT; i++) {
    p5.ls.push(new Line())
  }
};

p5.draw = () => {    
  for (let i = 0; i !== p5.ls.length; i++) {
    p5.ls[i].move();
    if(p5.ls[i].x === p5.width) {
      p5.noLoop()
    }
  }
};
};

export default sketch;`,
  },
  {
    icon: P5JSIcon,
    slug: 'bouncing-line',
    title: 'Bouncing Line',
    description: 'p5.js sketch',
    sketchId: 'bouncing-line',
    code: `const sketch = (p5) => {
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

export default sketch;`,
  },
  {
    icon: P5JSIcon,
    slug: 'controlled-explosion',
    title: 'Controlled Explosion',
    description: 'p5.js sketch',
    sketchId: 'controlled-explosion',
    code: `import {Vector} from "p5";

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
    p5.createCanvas(700, 700);
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

export default sketch;`,
  },
  {
    icon: P5JSIcon,
    slug: 'auto-pilot',
    title: 'Auto Pilot',
    description: 'p5.js sketch',
    sketchId: 'auto-pilot',
    code: `import {Vector} from "p5";

const sketch = (p) => {
  const WEIGHT = 20;
  const POINTS_AMOUNT = 20;

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
    p.createCanvas(900, 400);

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
          p.points.push(new Point());
        }
      });
    }

    // p.mover.checkEdges()
    p.mover.update();
    p.mover.display();
  };
};

export default sketch;`,
  },
  {
    icon: P5JSIcon,
    slug: 'spiral',
    title: 'Spiral',
    description: 'p5.js sketch',
    sketchId: 'spiral',
    code: `const sketch = (p) => {
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
`,
  },
];

export default snippets;
