import { ReactP5Wrapper, P5WrapperProps } from 'react-p5-wrapper';

const P5Sketch = ({ sketch }: P5WrapperProps) => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default P5Sketch;
