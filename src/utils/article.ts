import { Article } from '../api/article-api'

export function authorProfileLink(article: Article) {
  return `/profile/${article.author.username}`
}
