'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    mermaid: {
      initialize: (config: Record<string, unknown>) => void;
      run: (config?: { querySelector?: string }) => Promise<void>;
    };
  }
}

// 載入 mermaid CDN 並初始化渲染
export default function MermaidInit() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
    script.async = true;
    script.onload = () => {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#161b22',
          primaryTextColor: '#e6edf3',
          primaryBorderColor: '#30363d',
          lineColor: '#58a6ff',
          secondaryColor: '#21262d',
          tertiaryColor: '#0d1117',
          edgeLabelBackground: '#161b22',
          nodeTextColor: '#e6edf3',
        },
      });
      window.mermaid.run({ querySelector: '.mermaid' });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
