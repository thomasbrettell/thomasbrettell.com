import PerlinNoiseSketch from './perlinNoise';
import knot from './knot';
import bouncingLine from './bouncing-line';
import controlledExplosion from './controlled-explosion';
import autoPilot from './auto-pilot';
import pilotGame from './pilot-game';
import spiral from './spiral'
import { Sketch } from 'react-p5-wrapper';

interface SketchProps {
  id: string;
  sketch: Sketch;
}

const sketches: SketchProps[] = [
  {
    id: 'perlin-noise',
    sketch: PerlinNoiseSketch,
  },
  {
    id: 'knot',
    sketch: knot,
  },
  {
    id: 'bouncing-line',
    sketch: bouncingLine,
  },
  {
    id: 'controlled-explosion',
    sketch: controlledExplosion,
  },
  {
    id: 'auto-pilot',
    sketch: autoPilot,
  },
  {
    id: 'pilot-game',
    sketch: pilotGame,
  },
  {
    id: 'spiral',
    sketch: spiral
  }
];

export default sketches;
