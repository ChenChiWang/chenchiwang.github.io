export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #30363d',
        background: '#161b22',
        padding: '1.5rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          color: '#484f58',
        }}
      >
        <span style={{ color: '#3fb950' }}>©</span>{' '}
        {new Date().getFullYear()} Chen Chi Wang
        <span style={{ margin: '0 0.5rem', color: '#30363d' }}>·</span>
        <a
          href="https://github.com/chenchiwang"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#58a6ff', textDecoration: 'none' }}
        >
          GitHub
        </a>
        <span style={{ margin: '0 0.5rem', color: '#30363d' }}>·</span>
        <a
          href="https://www.linkedin.com/in/john-wang-5bb70bb3/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#58a6ff', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
