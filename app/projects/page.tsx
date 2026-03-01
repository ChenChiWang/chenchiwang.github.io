import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/lib/markdown';

// 分類設定
const subcategories = [
  { key: 'Verben', label: 'Verben', icon: '⚡', color: '#f0883e' },
  { key: 'Grammatik', label: 'Grammatik', icon: '📐', color: '#58a6ff' },
  { key: 'Wortschatz', label: 'Wortschatz', icon: '💬', color: '#3fb950' },
];

export default function ProjectsPage() {
  const projects = getAllPosts('projects');

  // 依 subcategory 分組
  const grouped: Record<string, PostMeta[]> = {};
  for (const sub of subcategories) {
    grouped[sub.key] = projects.filter(p => p.subcategory === sub.key);
  }
  // 沒有 subcategory 的放「其他」
  const uncategorized = projects.filter(p => !p.subcategory);

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
          Deutsch Notes
        </h1>
        <p style={{ color: '#8b949e', marginTop: '0.5rem' }}>
          德語學習筆記 — A1→B1 Grammar Cheat Sheets
        </p>
      </div>

      {/* 分組顯示 */}
      {subcategories.map(({ key, label, icon, color }) => {
        const items = grouped[key];
        if (!items || items.length === 0) return null;

        return (
          <section key={key} style={{ marginBottom: '2.5rem' }}>
            {/* 分類標題 */}
            <h2
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem',
                color,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{icon}</span> {label}
              <span style={{ fontSize: '0.75rem', color: '#484f58' }}>({items.length})</span>
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {/* Verben 攻略置頂 */}
              {key === 'Verben' && (
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
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>🗺️</div>
                  <div style={{ fontWeight: 600, color: '#e6edf3', fontSize: '0.95rem', lineHeight: 1.4 }}>
                    德文動詞攻略
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#8b949e', marginTop: '0.25rem' }}>
                    A1-B1 總覽地圖
                  </div>
                </Link>
              )}

              {items.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
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
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{getIcon(project.title)}</div>
                  <div style={{ fontWeight: 600, color: '#e6edf3', fontSize: '0.95rem', lineHeight: 1.4 }}>
                    {project.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* 未分類 */}
      {uncategorized.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1rem',
              color: '#8b949e',
              marginBottom: '1rem',
            }}
          >
            📝 Sonstiges ({uncategorized.length})
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {uncategorized.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
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
                <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{getIcon(project.title)}</div>
                <div style={{ fontWeight: 600, color: '#e6edf3', fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {project.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
  if (title.includes('Reflexive')) return '🔄';
  if (title.includes('Präpositionalergänzung') && title.includes('Üben')) return '✏️';
  if (title.includes('Präpositionalergänzung')) return '🔗';
  if (title.includes('Verb') || title.includes('Dativ')) return '⚡';
  if (title.includes('Pronomen')) return '👤';
  if (title.includes('Präposition')) return '📍';
  if (title.includes('Deklination')) return '🔤';
  if (title.includes('Fragewörter')) return '❓';
  if (title.includes('Redemittel') || title.includes('Wendung')) return '💬';
  if (title.includes('Positionsverben')) return '📐';
  return '📝';
}
