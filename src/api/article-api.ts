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

export type ArticlesResponse = {
  articles: Article[]
  articlesCount: number
}

export async function getGlobalFeed() {
  return runRequest(() => axios.get<ArticlesResponse>('/articles'))
}
