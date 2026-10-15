import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// CSS public URLs need the same prefix as Next's scripts and rendered images.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
async function prepare(directory) {
 for (const entry of await readdir(directory, { withFileTypes: true })) {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) await prepare(path);
  else if (basePath && entry.name.endsWith('.css')) {
   const css = await readFile(path, 'utf8');
   await writeFile(path, css.replace(/url\((['"]?)(\/(?!\/)[^)'"\s]+)\1\)/g,
    (match, quote, url) => url.startsWith(`${basePath}/`) ? match : `url(${quote}${basePath}${url}${quote})`));
  }
 }
}
await prepare('out');
await writeFile('out/.nojekyll', '');
