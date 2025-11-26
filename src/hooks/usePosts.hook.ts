import { Post } from "@/modules/post/entities/Post"
import { computed } from "vue"

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
  const posts = useDocuments<Post>("@/pages/posts")

  return computed(() => posts.value.sort(byMostRecentFirst))
}
