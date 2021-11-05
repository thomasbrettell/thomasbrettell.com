import P5JSIcon from './assets/P5JSIcon';
import ReactIcon from './assets/ReactIcon';

const snippets = [
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
    
    export default sketch;
    `,
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

    export default useHttp
    `
  }
];

export default snippets;
