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
    icon: P5JSIcon,
    slug: 'perlin-noise',
    title: 'Perlin noise line',
    description: 'Sketch for p5.js',
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

export default counterSlice.reducer
    `,
  },
];

export default snippets;
