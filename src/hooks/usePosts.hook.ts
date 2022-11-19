import { computed } from "vue"

interface Post {
  filename: string
  lastUpdated: Date
  href: string
  title: string
  date: Date
  meta: {
    filename: string
    lastUpdated: Date
    href: string
  }
  frontmatter: {
    title: string
    publishedAt?: Date
  }
  draft?: boolean
}

const byMostRecentFirst = (a: Post, b: Post) => {
  if (!b.date) {
    return 1
  }

  if (!a.date) {
    return 1
  }

  return a.date <= b.date ? 1 : -1
}

export const usePosts = () => {
  const posts = $(useDocuments<Post>("@/pages/posts"))

  return computed(() =>
    posts
      .filter((post) => import.meta.env.DEV || post.draft !== true)
      .sort(byMostRecentFirst)
  )
}
