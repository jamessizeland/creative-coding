import React, { useEffect, useRef } from 'react';
import canvasSketch from 'canvas-sketch';

export type CanvasDrawingProps = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const WIDTH = 600;
const HEIGHT = 600;

interface CanvasProps {
  draw: (props: CanvasDrawingProps) => void;
  animate?: boolean;
}

const CanvasSketch: React.FC<CanvasProps> = (props) => {
  const { draw, animate } = props;
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log('running canvas useEffect');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    canvasSketch(draw, {
      dimensions: [WIDTH, HEIGHT],
      units: 'px',
      resizeCanvas: false,
      styleCanvas: true,
      scaleToView: false,
      canvas: ref.current,
      animate,
    });

    return function cleanUp() {
      console.log('Canvas unmounting');
    };
  }, [draw, animate]);

  return (
    <canvas id="canvas" ref={ref} {...props} width={WIDTH} height={HEIGHT} />
  );
};

export default CanvasSketch;
