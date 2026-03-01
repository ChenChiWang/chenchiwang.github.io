'use client';

import { useEffect, useRef } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    p5: any;
  }
}

const SIZE = 230;

export default function CalabiYau() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let p5Instance: any = null;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/p5@1/lib/p5.min.js';
    script.async = true;
    script.onload = () => {
      p5Instance = new window.p5((p: any) => {
        const n = 5;
        let angle = 0;

        p.setup = () => {
          const canvas = p.createCanvas(SIZE, SIZE);
          canvas.style('display', 'block');
          p.colorMode(p.HSB, 360, 100, 100, 100);
          p.noFill();
        };

        p.draw = () => {
          // 背景色 #0d1117 純黑 (HSB 近似值)
          p.background(215, 43, 9, 25);
          p.translate(p.width / 2, p.height / 2);
          p.rotate(angle * 0.1);

          const scale = SIZE * 0.28;

          for (let k = 0; k < n; k++) {
            const hue = (k * 360 / n + angle * 20) % 360;

            p.beginShape();
            p.stroke(hue, 70, 90, 40);
            p.strokeWeight(1.2);

            const steps = 200;
            for (let i = 0; i <= steps; i++) {
              const alpha = (i / steps) * p.TWO_PI;
              const z1Re = Math.cos(alpha);
              const z1Im = Math.sin(alpha);
              const r = Math.pow(Math.sqrt(z1Re * z1Re + z1Im * z1Im), 1 / n);
              const theta = (Math.atan2(z1Im, z1Re) + 2 * Math.PI * k) / n;
              const x = r * Math.cos(theta + angle * 0.5);
              const y = r * Math.sin(theta + angle * 0.3);
              const twist = Math.sin(alpha * n + angle * 2) * 0.3;
              const px = (x * Math.cos(twist) - y * Math.sin(twist)) * scale;
              const py = (x * Math.sin(twist) + y * Math.cos(twist)) * scale;
              p.vertex(px, py);
            }
            p.endShape();

            p.beginShape();
            p.stroke(hue, 50, 70, 20);
            p.strokeWeight(0.6);

            for (let i = 0; i <= steps; i++) {
              const alpha = (i / steps) * p.TWO_PI;
              const r2 = Math.pow(0.7 + 0.3 * Math.sin(alpha * n), 1 / n);
              const theta2 = (alpha + 2 * Math.PI * k) / n;
              const x2 = r2 * Math.cos(theta2 + angle * 0.7);
              const y2 = r2 * Math.sin(theta2 + angle * 0.5);
              const twist2 = Math.cos(alpha * n - angle) * 0.4;
              const px2 = (x2 * Math.cos(twist2) - y2 * Math.sin(twist2)) * scale * 0.8;
              const py2 = (x2 * Math.sin(twist2) + y2 * Math.cos(twist2)) * scale * 0.8;
              p.vertex(px2, py2);
            }
            p.endShape();
          }

          angle += 0.005;
        };
      }, container);
    };

    document.body.appendChild(script);

    return () => {
      if (p5Instance) p5Instance.remove();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: '-10px',
        right: '150px',
        width: `${SIZE}px`,
        height: `${SIZE}px`,
        overflow: 'hidden',
        opacity: 0.5,
      }}
    />
  );
}
