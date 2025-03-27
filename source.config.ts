import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
