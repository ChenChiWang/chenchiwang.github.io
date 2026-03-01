import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog');
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostBySlug('blog', slug);

  if (!post) notFound();

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Breadcrumb */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.82rem',
          color: '#484f58',
          marginBottom: '2rem',
        }}
      >
        <Link href="/" style={{ color: '#58a6ff', textDecoration: 'none' }}>~</Link>
        {' / '}
        <Link href="/blog" style={{ color: '#58a6ff', textDecoration: 'none' }}>blog</Link>
        {' / '}
        <span style={{ color: '#8b949e' }}>{post.title}</span>
      </div>

      {/* Post header */}
      <header style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #30363d' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#484f58',
            }}
          >
            {post.date}
          </span>
          {post.categories && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#3fb950',
                background: 'rgba(63,185,80,0.1)',
                border: '1px solid rgba(63,185,80,0.3)',
                borderRadius: '4px',
                padding: '0.1rem 0.5rem',
              }}
            >
              {post.categories}
            </span>
          )}
        </div>
        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e6edf3',
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h1>
      </header>

      {/* Post content */}
      <article
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back link */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #30363d' }}>
        <Link
          href="/blog"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: '#58a6ff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          ← back to blog
        </Link>
      </div>
    </div>
  );
}
