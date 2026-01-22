import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export async function GET(context) {
  return rss({
     title: 'Swipe.Photo',
    description: 'Swipe.Photo helps you quickly clean and declutter your iPhone camera roll by swiping to keep what matters and delete what doesn’t.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
