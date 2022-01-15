// https://www.w3schools.com/tags/ref_canvas.asp
import React from 'react';
import './App.css';
import Canvas from './Canvas/Canvas';
import type { DrawType } from './Canvas/useCanvas';
import CanvasSketch, { CanvasDrawingProps } from './Canvas/CanvasSketch';

// const draw: DrawType = (ctx, frameCount) => {
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   ctx.fillStyle = '#000000';
//   ctx.beginPath();
//   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
//   ctx.fill();
// };

function App() {
  const draw: DrawType = (ctx, frameCount) => {
    ctx.fillStyle = '#7999';
    ctx.fillRect(0, 0, 600, 600);

    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 5; j++) {
        const [width, height, gap] = [50, 50, 20];
        const x = 100 + (width + gap) * i;
        const y = 100 + (height + gap) * j;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.rect(x + 8, y + 8, width - 16, height - 16);
          ctx.stroke();
        }
      }
    }
  };
  const sketch = ({ context, height, width }: CanvasDrawingProps) => {
    context.fillStyle = '#7999';
    context.fillRect(0, 0, 600, 600);

    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 5; j++) {
        const [w, h, gap] = [50, 50, 20];
        const x = 100 + (w + gap) * i;
        const y = 100 + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }
      }
    }
  };

  return (
    <div className="App">
      <Canvas draw={draw} />
      <CanvasSketch draw={sketch} />
    </div>
  );
}

export default App;
