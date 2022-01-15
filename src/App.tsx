// https://www.w3schools.com/tags/ref_canvas.asp
import React from 'react';
import './App.css';
import Canvas from './Canvas/Canvas';
import type { DrawType } from './Canvas/useCanvas';

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

  return (
    <div className="App">
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
