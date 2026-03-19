import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  paths() {
    const articlesDir = resolve(__dirname, 'articles');
    let dates: string[] = [];
    try {
      dates = readdirSync(articlesDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(d.name))
        .map((d) => d.name);
    } catch {
      /* articles dir may not exist */
    }
    return dates.map((date) => ({ params: { date } }));
  },
};
