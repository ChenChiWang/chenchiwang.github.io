import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default function BlogPage() {
  const posts = getAllPosts('blog');

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
          <span style={{ color: '#e6edf3' }}>ls blog/</span>
        </div>
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e6edf3',
          }}
        >
          Blog
        </h1>
        <p style={{ color: '#8b949e', marginTop: '0.5rem' }}>
          移居德國的記錄 — Relocation journey to Germany
        </p>
      </div>

      {/* Post list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {/* Header row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 100px',
            padding: '0.5rem 1rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#484f58',
            borderBottom: '1px solid #30363d',
          }}
        >
          <span>DATE</span>
          <span>TITLE</span>
          <span style={{ textAlign: 'right' }}>CATEGORY</span>
        </div>

        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 100px',
              padding: '0.875rem 1rem',
              textDecoration: 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              transition: 'background 0.1s',
              alignItems: 'start',
              gap: '0.5rem',
            }}
            className="blog-row"
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.78rem',
                color: '#484f58',
                paddingTop: '2px',
              }}
            >
              {post.date}
            </span>
            <div>
              <div style={{ fontWeight: 500, color: '#e6edf3', marginBottom: '0.25rem' }}>
                {post.title}
              </div>
              <div style={{ fontSize: '0.83rem', color: '#6e7681' }}>{post.excerpt}</div>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#3fb950',
                background: 'rgba(63,185,80,0.1)',
                border: '1px solid rgba(63,185,80,0.3)',
                borderRadius: '4px',
                padding: '0.15rem 0.5rem',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                alignSelf: 'start',
                justifySelf: 'end',
              }}
            >
              {post.categories || 'blog'}
            </span>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p style={{ color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>
          // no posts found
        </p>
      )}
    </div>
  );
}
