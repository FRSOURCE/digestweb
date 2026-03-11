import { createContentLoader } from 'vitepress';

const urlRegex = /\/articles\/(.*)\/(.*)/;

export default createContentLoader('articles/*/*.md', {
  transform: (data) => {
    return data.map((item) => {
      const date = item.url.match(urlRegex)?.[1];
      if (!date) throw new Error(`Invalid date in ${item.url}`);
      return { ...item, date: new Date(date) };
    });
  },
});
