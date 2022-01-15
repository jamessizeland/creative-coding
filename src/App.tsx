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

const draw: DrawType = (ctx, frameCount) => {
  ctx.fillStyle = 'blue';
  ctx.fillRect(100, 100, 400, 400);

  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.rect(110, 110, 380, 380);
  ctx.stroke();
};

function App() {
  return (
    <div className="App">
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
