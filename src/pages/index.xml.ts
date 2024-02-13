const postImportResult = import.meta.glob("./blog/**/*.{md,mdx}", {
  eager: true,
});

// Sort posts by date
const posts = Object.values(postImportResult).sort((a:any, b:any) => {
  const aDate = new Date(a.frontmatter.date);
  const bDate = new Date(b.frontmatter.date);
  return bDate.getTime() - aDate.getTime();
});

const age = Math.floor((Date.now() / 1000 - 1233516000) / 31536000);

export const GET = () => new Response(
`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="https://jontes.page/rss/styles.xsl"?>
<rss version="2.0">
<channel>
  <title>Jonte's Blog</title>
  <stylesheet>https://jontes.page/rss/styles.xsl</stylesheet>
  <description>The thoughts of a ${age} year old developer</description>
  <link>https://jontes.page</link>
  ${posts.map((post:any) => `
  <item>
    <title>${post.frontmatter.title}</title>
    <description>${post.frontmatter.description}</description>
    <link>https://jontes.page${post.url}</link>
    <guid>https://jontes.page${post.url}</guid>
    <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
  </item>
  `).join('')}
</channel>
</rss>
`, )