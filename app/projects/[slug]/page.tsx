import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug: encodeURIComponent(slug) }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const post = await getPostBySlug('projects', slug);

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
        <Link href="/projects" style={{ color: '#58a6ff', textDecoration: 'none' }}>projects</Link>
        {' / '}
        <span style={{ color: '#8b949e' }}>{post.title}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #30363d' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          {post.categories && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#58a6ff',
                background: 'rgba(88,166,255,0.1)',
                border: '1px solid rgba(88,166,255,0.3)',
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
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#e6edf3',
            lineHeight: 1.3,
          }}
        >
          🇩🇪 {post.title}
        </h1>
      </header>

      {/* Content */}
      <article
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #30363d' }}>
        <Link
          href="/projects"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: '#58a6ff',
            textDecoration: 'none',
          }}
        >
          ← back to projects
        </Link>
      </div>
    </div>
  );
}
