import { axios } from '../utils/axios'
import { runRequest } from '../utils/request'

type Profile = {
  username: string
  bio: string
  image: string
  following: boolean
}

export type Comment = {
  id: number
  body: string
  createdAt: string
  updatedAt: string
  author: Profile
}

export function getComments(articleSlug: string) {
  return runRequest(() => axios.get<{ comments: Comment[] }>(`/articles/${articleSlug}/comments`))
}

export function postComment(articleSlug: string, body: string) {
  const payload = { comment: { body } }
  return runRequest(() => axios.post(`/articles/${articleSlug}/comments`, payload))
}

export function deleteComment() {}

export function updateComment() {}
