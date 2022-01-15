// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import React from 'react';
import useCanvas, { DrawType } from './useCanvas';

interface ICanvasProps
  extends JSX.IntrinsicAttributes,
    React.ClassAttributes<HTMLCanvasElement>,
    React.CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: DrawType;
  animate?: boolean;
}

const Canvas = (props: ICanvasProps) => {
  const { draw, animate, ...rest } = props;
  const canvasRef = useCanvas(draw, animate);

  return (
    <canvas
      ref={canvasRef}
      style={{ margin: '10px', padding: '10px' }}
      width="600"
      height="600"
      {...rest}
    />
  );
};

export default Canvas;
