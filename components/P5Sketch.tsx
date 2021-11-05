import { ReactP5Wrapper, P5WrapperProps } from 'react-p5-wrapper';
import { FC } from 'react';
import sketches from '../sketches/sketches'

interface P5SketchProp {
  sketchId: string;
}

const P5Sketch: FC<P5SketchProp> = ({ sketchId }) => {
  const sketch  = sketches.find(sketch => sketch.id === sketchId)


  if(!sketch) {
    return <>Sketch id wrong</>
  }

  return <ReactP5Wrapper sketch={sketch.sketch} />;
};

export default P5Sketch;
