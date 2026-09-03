import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(import.meta.dirname, '..');
const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'PRD.md',
  'ROADMAP.md',
  'DESIGN.md',
  'USERFLOW.md',
  'ARCHITECTURE.md',
  'TESTING.md',
  'CONTRIBUTING.md',
  '.env.example',
  'index.html',
  'vercel.json',
  'robots.txt',
  'sitemap.xml',
  'favicon.svg',
  'source/_ideal-cannabis-website-v2.html',
  'documentation/assets/ideal-cannabis-desktop.png',
  'documentation/assets/ideal-cannabis-mobile.png',
  'social-preview.png'
];

const failures = [];
for (const file of requiredFiles) {
  const path = resolve(root, file);
  if (!existsSync(path) || statSync(path).size === 0) failures.push(`Missing or empty: ${file}`);
}

const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const requiredHtml = [
  ['canonical URL', '<link rel="canonical" href="https://ideal-cannabis-website.vercel.app/">'],
  ['robots metadata', 'index,follow,max-image-preview:large'],
  ['Open Graph image width', '<meta property="og:image:width" content="1200">'],
  ['Open Graph image height', '<meta property="og:image:height" content="630">'],
  ['Twitter large image card', '<meta name="twitter:card" content="summary_large_image">'],
  ['skip navigation', 'class="skip-link"'],
  ['reduced motion support', 'prefers-reduced-motion:reduce']
];
for (const [label, value] of requiredHtml) {
  if (!html.includes(value)) failures.push(`Missing ${label}`);
}

if (html.includes('static.wixstatic.com')) failures.push('Production HTML still hotlinks Wix photography');

const imageRefs = [...html.matchAll(/(?:img:|src=)["'](assets\/images\/[^"']+)/g)].map((match) => match[1]);
for (const image of new Set(imageRefs)) {
  if (!existsSync(resolve(root, image))) failures.push(`Missing referenced image: ${image}`);
}
if (new Set(imageRefs).size !== 9) failures.push(`Expected 9 local image references, found ${new Set(imageRefs).size}`);

const source = readFileSync(resolve(root, 'source/_ideal-cannabis-website-v2.html'));
const sourceSha = createHash('sha256').update(source).digest('hex');
if (sourceSha !== '2b11508a204cfc0aa6d584a54cdbc5f0cbe37d1430f978c38b93af43ca28d83c') {
  failures.push('Preserved source artifact no longer matches the supplied HTML');
}

if (failures.length) {
  console.error('Release audit failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}

console.log('Release audit passed: required artifacts, metadata, source preservation, and 9 local images verified.');
