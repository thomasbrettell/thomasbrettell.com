import { ReactP5Wrapper } from 'react-p5-wrapper';
import { FC } from 'react';
import sketches from '../sketches/sketches';
import styled from 'styled-components';

interface P5SketchProp {
  sketchId: string;
}

const SketchWrapper = styled.div`
  display: flex;
  justify-content: center;
  canvas {
    border: 1px solid var(--border-grey);
  }
`;

const P5Sketch: FC<P5SketchProp> = ({ sketchId }) => {
  const sketch = sketches.find((sketch) => sketch.id === sketchId);

  if (!sketch?.sketch) {
    return <>Sketch id wrong</>;
  }

  return (
    <SketchWrapper>
      <ReactP5Wrapper sketch={sketch.sketch} />
    </SketchWrapper>
  );
};

export default P5Sketch;
