import Link from 'next/link';

const quizzes = [
  {
    href: '/quiz/artikel',
    icon: '📖',
    title: 'der Artikel',
    desc: '冠詞變化練習 — definit / undefinit / negativ',
    color: '#3fb950',
  },
  {
    href: '/quiz/personalpronomen',
    icon: '👤',
    title: 'das Personalpronomen',
    desc: '人稱代名詞 Akkusativ & Dativ 練習',
    color: '#58a6ff',
  },
  {
    href: '/quiz/possessivpronomen',
    icon: '🏷️',
    title: 'das Possessivpronomen',
    desc: '所有格代名詞四格變化練習',
    color: '#f0883e',
  },
];

export default function QuizPage() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: '#8b949e',
            marginBottom: '0.5rem',
          }}
        >
          <span style={{ color: '#3fb950' }}>chen@ccsphere</span>
          <span style={{ color: '#8b949e' }}>:~ $ </span>
          <span style={{ color: '#e6edf3' }}>ls quiz/</span>
        </div>
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e6edf3',
          }}
        >
          🇩🇪 Deutsch Quiz
        </h1>
        <p style={{ color: '#8b949e', marginTop: '0.5rem' }}>
          德語文法互動練習 — 隨機出題，即時回饋
        </p>
      </div>

      {/* Quiz cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {quizzes.map(({ href, icon, title, desc, color }) => (
          <Link
            key={href}
            href={href}
            className="hover-card"
            style={{
              display: 'block',
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '10px',
              padding: '1.5rem',
              textDecoration: 'none',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                color,
                marginBottom: '0.4rem',
                fontSize: '1rem',
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#8b949e', lineHeight: 1.5 }}>
              {desc}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
