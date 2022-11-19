export interface Post {
  filename: string
  lastUpdated: Date
  href: string
  title: string
  date: Date
  illustration: string
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
