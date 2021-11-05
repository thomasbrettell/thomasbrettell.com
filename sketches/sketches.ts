import PerlinNoiseSketch from './perlinNoise';
import { Sketch } from 'react-p5-wrapper';

interface SketchProps {
  id: string;
  sketch: Sketch,
}

const sketches: SketchProps[] = [
  {
    id: 'perlin-noise',
    sketch: PerlinNoiseSketch,
  },
];

export default sketches;
