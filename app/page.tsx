import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default function Home() {
  const recentPosts = getAllPosts('blog').slice(0, 3);

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>

      {/* Terminal Hero */}
      <div
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {/* Window chrome */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '1.25rem' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#484f58' }}>
            bash — chen@ccsphere
          </span>
        </div>

        {/* Command lines */}
        <div style={{ fontSize: '0.9rem', lineHeight: 2 }}>
          <p>
            <span style={{ color: '#3fb950' }}>chen@ccsphere</span>
            <span style={{ color: '#8b949e' }}>:</span>
            <span style={{ color: '#58a6ff' }}>~</span>
            <span style={{ color: '#e6edf3' }}> $ </span>
            <span style={{ color: '#e6edf3' }}>whoami</span>
          </p>
          <p style={{ color: '#c9d1d9', paddingLeft: '1rem' }}>
            Chen Chi Wang — Procurement · Data · Deutschland 🇩🇪
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <span style={{ color: '#3fb950' }}>chen@ccsphere</span>
            <span style={{ color: '#8b949e' }}>:</span>
            <span style={{ color: '#58a6ff' }}>~</span>
            <span style={{ color: '#e6edf3' }}> $ </span>
            <span style={{ color: '#e6edf3' }}>cat interests.txt</span>
          </p>
          <div style={{ color: '#8b949e', paddingLeft: '1rem', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <p><span style={{ color: '#f0883e' }}>›</span> 15+ yrs in Procurement &amp; Supply Chain Management</p>
            <p><span style={{ color: '#f0883e' }}>›</span> Python · SQL · Data Analysis · Dashboard</p>
            <p><span style={{ color: '#f0883e' }}>›</span> Relocated to Germany (DE) — Blue Card holder</p>
            <p><span style={{ color: '#f0883e' }}>›</span> Learning Deutsch A1→B1</p>
          </div>
          <p style={{ marginTop: '0.75rem' }}>
            <span style={{ color: '#3fb950' }}>chen@ccsphere</span>
            <span style={{ color: '#8b949e' }}>:</span>
            <span style={{ color: '#58a6ff' }}>~</span>
            <span style={{ color: '#e6edf3' }}> $ ls -la</span>
          </p>
          <div style={{ paddingLeft: '1rem', fontSize: '0.875rem', lineHeight: 2 }}>
            <p>
              <span style={{ color: '#58a6ff' }}>drwxr-xr-x</span>
              <span style={{ color: '#8b949e', margin: '0 1rem' }}>blog/</span>
              <span style={{ color: '#484f58', fontSize: '0.8rem' }}>— Relocation journey to Germany</span>
            </p>
            <p>
              <span style={{ color: '#58a6ff' }}>drwxr-xr-x</span>
              <span style={{ color: '#8b949e', margin: '0 1rem' }}>projects/</span>
              <span style={{ color: '#484f58', fontSize: '0.8rem' }}>— Deutsch learning notes</span>
            </p>
            <p>
              <span style={{ color: '#58a6ff' }}>-rw-r--r--</span>
              <span style={{ color: '#8b949e', margin: '0 1rem' }}>about.md</span>
              <span style={{ color: '#484f58', fontSize: '0.8rem' }}>— /about/me</span>
            </p>
          </div>
        </div>
      </div>

      {/* Nav cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        {[
          { href: '/blog', icon: '📝', label: 'Blog', desc: '移居德國記錄', color: '#3fb950' },
          { href: '/projects', icon: '🇩🇪', label: 'Deutsch', desc: '德語學習筆記', color: '#58a6ff' },
          { href: '/about', icon: '👤', label: 'About', desc: '關於我', color: '#f0883e' },
        ].map(({ href, icon, label, desc, color }) => (
          <Link
            key={href}
            href={href}
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
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color, marginBottom: '0.25rem' }}>
              {label}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>{desc}</div>
          </Link>
        ))}
      </div>

      {/* Recent Posts */}
      <section>
        <h2
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            color: '#8b949e',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#3fb950' }}>▸</span> recent_posts
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${encodeURIComponent(post.slug)}`}
              className="hover-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  color: '#484f58',
                  whiteSpace: 'nowrap',
                  marginTop: '2px',
                }}
              >
                {post.date}
              </span>
              <div>
                <div style={{ fontWeight: 500, color: '#e6edf3', marginBottom: '0.25rem' }}>
                  {post.title}
                </div>
                <div style={{ fontSize: '0.83rem', color: '#8b949e' }}>{post.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: '#58a6ff',
              textDecoration: 'none',
            }}
          >
            view all posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
