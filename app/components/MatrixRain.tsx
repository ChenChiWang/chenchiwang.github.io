'use client';

import { useEffect, useRef } from 'react';

// 字符集：數字、hex、程式符號、少量片假名、德文字母
const CHARS = '0123456789ABCDEFabcdef{}[]()<>=/+*&|!?#@$%^~;:._-\\アウカシスネホヨルンäöüß';
const FONT_SIZE = 22;
const COL_WIDTH = 44;
const TRAIL_LEN = 16; // 拖尾長度（格數）

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    let cols: number;
    // 每欄：目前 y 位置（浮點數）、固定的隨機字符陣列
    let streams: { y: number; speed: number; chars: string[] }[];
    let animId: number;
    const rows = () => Math.ceil(canvas.height / FONT_SIZE) + TRAIL_LEN;

    function initStream() {
      const totalRows = rows();
      return {
        y: Math.random() * -totalRows, // 隨機起始位置（負數＝還沒進畫面）
        speed: 0.08 + Math.random() * 0.12,
        chars: Array.from({ length: totalRows }, () => randomChar()),
      };
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newCols = Math.floor(canvas.width / COL_WIDTH);
      const oldStreams = streams || [];
      streams = new Array(newCols);
      for (let i = 0; i < newCols; i++) {
        streams[i] = oldStreams[i] || initStream();
      }
      cols = newCols;
    }

    function draw() {
      if (!ctx) return;

      // 每幀完全清空，不留殘影
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < cols; i++) {
        const s = streams[i];
        const headRow = Math.floor(s.y);
        const x = i * COL_WIDTH;

        // 畫拖尾：從頭部往上畫 TRAIL_LEN 格，透明度遞減
        for (let t = 0; t < TRAIL_LEN; t++) {
          const row = headRow - t;
          if (row < 0) continue;
          const py = row * FONT_SIZE;
          if (py > canvas.height) continue;

          const charIdx = row % s.chars.length;
          const alpha = t === 0 ? 0.95 : (1 - t / TRAIL_LEN) * 0.6;

          if (t === 0) {
            // 頭部：亮白綠色
            ctx.fillStyle = '#7ee787';
          } else {
            ctx.fillStyle = '#3fb950';
          }
          ctx.globalAlpha = alpha;
          ctx.fillText(s.chars[charIdx], x, py);
        }

        // 推進
        s.y += s.speed;

        // 超出畫面＋拖尾完全離開後重置
        if ((headRow - TRAIL_LEN) * FONT_SIZE > canvas.height) {
          streams[i] = initStream();
          streams[i].y = Math.random() * -20; // 從頂部附近重新開始
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
