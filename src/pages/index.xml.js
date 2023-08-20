import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./blog/**/*.{md,mdx}", {
  eager: true,
});

// Sort posts by date
const posts = Object.values(postImportResult).sort((a, b) => {
  const aDate = new Date(a.frontmatter.date);
  const bDate = new Date(b.frontmatter.date);
  return bDate.getTime() - aDate.getTime();
});

export const get = () =>
  rss({
    stylesheet: "/rss/styles.xsl",
    title: "Jonte's Blog",
    description: "The thoughts of a 14 year old developer",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      customData: `
      <author>${post.frontmatter.author}</author>
    `,
    })),
  });
