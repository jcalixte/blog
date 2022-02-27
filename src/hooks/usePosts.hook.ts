import { computed } from "vue";

interface Post {
  filename: string;
  lastUpdated: Date;
  href: string;
  title: string;
  meta: {
    filename: string;
    lastUpdated: Date;
    href: string;
  };
  frontmatter: {
    title: string;
    publishedAt?: Date;
  };
}

const byDate = (a: Post, b: Post) => {
  if (!b.frontmatter.publishedAt) {
    return -1;
  }

  if (!a.frontmatter.publishedAt) {
    return 1;
  }

  return a.frontmatter.publishedAt <= b.frontmatter.publishedAt ? -1 : 1;
};

export const usePosts = () => {
  const posts = $(useDocuments<Post>("@/pages/posts"));

  return computed(() => posts.sort(byDate));
};
