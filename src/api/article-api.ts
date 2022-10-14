import { axios } from '../utils/axios'
import { runRequest } from '../utils/request'

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
}

type ArticleResponse = {
  article: Article
}

export type ArticlesResponse = {
  articles: Article[]
  articlesCount: number
}

export async function getGlobalFeed() {
  return runRequest(() => axios.get<ArticlesResponse>('/articles'))
}

export async function favoriteArticle(slug: string) {
  return runRequest(() => axios.post<ArticleResponse>(`/articles/${slug}/favorite`))
}

export async function unfavoriteArticle(slug: string) {
  return runRequest(() => axios.delete<ArticleResponse>(`/articles/${slug}/favorite`))
}
