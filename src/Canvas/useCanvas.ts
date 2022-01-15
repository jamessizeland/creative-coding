import { useRef, useEffect } from 'react';

export type DrawType = (
  context: CanvasRenderingContext2D,
  height?: number,
  width?: number,
  frameCount?: number,
) => void;

const useCanvas = (draw: DrawType, animate = false) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let frameCount = 0;
    let animationFrameId: number;
    if (canvas) {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      if (animate) {
        const render = () => {
          frameCount++;
          draw(context, frameCount);
          animationFrameId = window.requestAnimationFrame(render);
          console.log(frameCount);
        };
        render();
      } else draw(context, frameCount);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, animate]);

  return canvasRef;
};

export default useCanvas;
