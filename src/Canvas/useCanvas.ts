import { useRef, useEffect } from 'react';

export type DrawType = (
  ctx: CanvasRenderingContext2D,
  frameCount: number,
) => void;

const useCanvas = (draw: DrawType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let frameCount = 0;
    let animationFrameId: number;
    if (canvas) {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      const render = () => {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
