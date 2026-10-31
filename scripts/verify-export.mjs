import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const slug = 'whatsapp-business-customer-service-hong-kong';
const article = readFileSync(`out/insights/${slug}/index.html`, 'utf8');
for (const file of ['index.html', '.htaccess', 'contact/index.html', 'api/contact.php', 'sitemap.xml']) {
  assert(existsSync(`out/${file}`), `Missing ${file}`);
}
const pictures = [...article.matchAll(/<img\b[^>]*>/g)].filter(([tag]) => /whatsapp-(customer-service-hero|enquiry|replies|handover|review)/.test(tag));
assert.equal(pictures.length, 5, 'Article must contain five distinct editorial pictures');
for (const [tag] of pictures) {
  const src = tag.match(/src="([^"]+)"/)?.[1];
  assert(src && existsSync(path.join('out', src)), `Missing picture ${src}`);
  assert(/alt="[A-Za-z][^"]{25,}"/.test(tag), 'Each picture needs descriptive English alt text');
}
assert(article.includes('https://wa.me/85266702707'), 'Missing promotional WhatsApp link');
assert(article.includes('application/ld+json'), 'Missing article structured data');
assert(readFileSync('out/insights/index.html', 'utf8').includes(slug), 'Article missing from category listing');
assert(readFileSync('out/sitemap.xml', 'utf8').includes(slug), 'Article missing from sitemap');
console.log('Static export verified: article, category, five pictures, metadata, WhatsApp CTA and sitemap.');
