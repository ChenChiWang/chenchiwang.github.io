import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const contentDir = path.join(process.cwd(), 'content');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  categories?: string;
  subcategory?: string;
  excerpt?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/\.md$/, '');
}

function stripJekyllTags(content: string): string {
  // Remove Jekyll liquid template tags
  return content
    .replace(/{%.*?%}/gs, '')
    .replace(/{{.*?}}/gs, '')
    .replace(/<script[^>]*src="[^"]*momo-script[^"]*"[^>]*><\/script>/gi, '')
    .trim();
}

export function getAllPosts(section: 'blog' | 'projects'): PostMeta[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const excerpt = stripJekyllTags(content)
      .replace(/#+\s/g, '')
      .replace(/\*\*/g, '')
      .replace(/\|.*\|/g, '')
      .replace(/[-*]\s/g, '')
      .trim()
      .slice(0, 120);

    return {
      slug: getSlug(filename),
      title: data.title || filename,
      date: data.date ? String(data.date).slice(0, 10) : '',
      categories: data.categories || '',
      subcategory: data.subcategory || '',
      excerpt: excerpt + '...',
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(section: 'blog' | 'projects', slug: string): Promise<Post | null> {
  const dir = path.join(contentDir, section);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const cleanContent = stripJekyllTags(content);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(cleanContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date).slice(0, 10) : '',
    categories: data.categories || '',
    content: processed.toString(),
  };
}

export function getAllSlugs(section: 'blog' | 'projects'): string[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => getSlug(f));
}
