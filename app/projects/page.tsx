import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default function ProjectsPage() {
  const projects = getAllPosts('projects');

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
          <span style={{ color: '#e6edf3' }}>ls projects/</span>
        </div>
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e6edf3',
          }}
        >
          🇩🇪 Deutsch Notes
        </h1>
        <p style={{ color: '#8b949e', marginTop: '0.5rem' }}>
          德語學習筆記 — A1→B1 Grammar Cheat Sheets
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {/* Verben 攻略（獨立頁面，置頂） */}
        <Link
          href="/projects/verben"
          className="hover-card hover-card-orange"
          style={{
            display: 'block',
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '10px',
            padding: '1.25rem',
            textDecoration: 'none',
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>⚡</div>
          <div
            style={{
              fontWeight: 600,
              color: '#e6edf3',
              marginBottom: '0.4rem',
              fontSize: '0.95rem',
              lineHeight: 1.4,
            }}
          >
            Deutsch Cheat Sheet - Verben
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#f0883e',
              background: 'rgba(240,136,62,0.08)',
              border: '1px solid rgba(240,136,62,0.2)',
              borderRadius: '4px',
              padding: '0.15rem 0.5rem',
              display: 'inline-block',
              marginTop: '0.5rem',
            }}
          >
            Deutsch
          </div>
        </Link>

        {projects.map((project) => {
          const icon = getIcon(project.title);
          return (
            <Link
              key={project.slug}
              href={`/projects/${encodeURIComponent(project.slug)}`}
              className="hover-card"
              style={{
                display: 'block',
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '10px',
                padding: '1.25rem',
                textDecoration: 'none',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{icon}</div>
              <div
                style={{
                  fontWeight: 600,
                  color: '#e6edf3',
                  marginBottom: '0.4rem',
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: '#58a6ff',
                  background: 'rgba(88,166,255,0.08)',
                  border: '1px solid rgba(88,166,255,0.2)',
                  borderRadius: '4px',
                  padding: '0.15rem 0.5rem',
                  display: 'inline-block',
                  marginTop: '0.5rem',
                }}
              >
                {project.categories || 'Deutsch'}
              </div>
            </Link>
          );
        })}
      </div>

      {projects.length === 0 && (
        <p style={{ color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>
          // no notes found
        </p>
      )}
    </div>
  );
}

function getIcon(title: string): string {
  if (title.includes('Adjektiv')) return '🎨';
  if (title.includes('Verb')) return '⚡';
  if (title.includes('Pronomen')) return '👤';
  if (title.includes('Präposition')) return '📍';
  if (title.includes('Deklination')) return '🔤';
  if (title.includes('Fragewörter')) return '❓';
  if (title.includes('Reflexive')) return '🔄';
  if (title.includes('Redemittel') || title.includes('Wendung')) return '💬';
  if (title.includes('Positionsverben')) return '📐';
  return '📝';
}
