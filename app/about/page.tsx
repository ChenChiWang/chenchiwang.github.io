export default function AboutPage() {
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
          <span style={{ color: '#e6edf3' }}>cat about.md</span>
        </div>
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e6edf3',
          }}
        >
          About Me
        </h1>
      </div>

      {/* Profile card */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #58a6ff, #3fb950)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }}
          >
            👤
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#e6edf3',
                marginBottom: '0.25rem',
              }}
            >
              Chen Chi Wang
            </h2>
            <p style={{ color: '#58a6ff', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Procurement · Data Science · Deutschland 🇩🇪
            </p>
            <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.7 }}>
              With over 15 years of experience in procurement, I specialize in materials and product sourcing,
              project coordination, and system development. Currently based in Germany as a Blue Card holder.
            </p>
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {/* Programming */}
        <SkillCard
          title="Programming"
          icon="⚡"
          color="#f0883e"
          items={['Python (Advanced)', 'SQL', 'HTML / JavaScript', 'Shell Script']}
        />

        {/* Tools */}
        <SkillCard
          title="Data & Tools"
          icon="📊"
          color="#58a6ff"
          items={['Pyplot / Matplotlib', 'Tableau', 'Data Mining', 'Dashboard']}
        />

        {/* OS */}
        <SkillCard
          title="Platforms"
          icon="🖥️"
          color="#3fb950"
          items={['Linux (Ubuntu)', 'macOS', 'Windows']}
        />

        {/* Languages */}
        <SkillCard
          title="Languages"
          icon="🌍"
          color="#cba6f7"
          items={['Chinese 🇹🇼 Native', 'English Proficient', 'Deutsch A1→B1 Learning']}
        />
      </div>

      {/* Experience timeline */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '1.75rem',
          marginBottom: '2rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#58a6ff',
            fontSize: '1rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#3fb950' }}>▸</span> Experience
        </h3>

        {[
          { period: '2013 – present', role: 'Project Coordinator', desc: 'SCM operations from RFQ to EOL for system integration and brand projects' },
          { period: '2010 – present', role: 'Material Sourcing', desc: 'Procurement strategies and cost targets for mechanical, optical components' },
          { period: '2010 – present', role: 'System Developer', desc: 'Digitized SCM processes: RFQ system, data mining, dashboards, cost analysis' },
          { period: '2006 – 2010', role: 'Sales & Purchasing', desc: 'Sourcing of metal parts and equipment' },
        ].map(({ period, role, desc }) => (
          <div
            key={role}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: '1rem',
              marginBottom: '1rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #21262d',
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#484f58',
                paddingTop: '2px',
              }}
            >
              {period}
            </span>
            <div>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: '0.2rem' }}>{role}</div>
              <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '1.75rem',
          marginBottom: '2rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#58a6ff',
            fontSize: '1rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#3fb950' }}>▸</span> Education
        </h3>
        <div style={{ color: '#e6edf3', fontWeight: 600, marginBottom: '0.25rem' }}>
          Master of Business Administration
        </div>
        <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>
          National Yang Ming Chiao Tung University · Department of Management Science
        </div>
      </div>

      {/* Contact */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://github.com/chenchiwang"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(88,166,255,0.1)',
            border: '1px solid rgba(88,166,255,0.3)',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            color: '#58a6ff',
            textDecoration: 'none',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
          }}
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/john-wang-5bb70bb3/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(63,185,80,0.1)',
            border: '1px solid rgba(63,185,80,0.3)',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            color: '#3fb950',
            textDecoration: 'none',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
          }}
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}

function SkillCard({
  title,
  icon,
  color,
  items,
}: {
  title: string;
  icon: string;
  color: string;
  items: string[];
}) {
  return (
    <div
      style={{
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '10px',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.875rem',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: '0.9rem',
            color,
          }}
        >
          {title}
        </span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontSize: '0.87rem',
              color: '#c9d1d9',
              padding: '0.2rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color, fontSize: '0.6rem' }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
