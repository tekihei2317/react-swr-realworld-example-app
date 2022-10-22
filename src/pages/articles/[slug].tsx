import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Article, favoriteArticle, getArticle, unfavoriteArticle } from '../../api/article-api'
import { Comment, getComments, postComment } from '../../api/comment-api'
import { ArticleAction } from '../../components/ArticleActions'
import { ArticleComments } from '../../components/ArticleComments'
import { authorProfileLink } from '../../utils/article'
import { useAuthContext } from '../../utils/context'

export const ArticlePage = () => {
  const [article, setArticle] = useState<Article>()
  const { slug } = useParams()
  const { isLoggedIn } = useAuthContext()
  const navigate = useNavigate()
  const [comments, setComments] = useState<Comment[]>()

  const handleToggleLike = async (article: Article) => {
    if (!isLoggedIn) {
      navigate('/register')
      return
    }

    const toggleLike = article.favorited ? unfavoriteArticle : favoriteArticle
    const { data, status } = await toggleLike(article.slug)
    if (status === 200) {
      setArticle(data.article)
    }
  }

  const handlePostComment = async (body: string) => {
    if (!article) return
    if (!isLoggedIn) {
      navigate('/register')
      return
    }
    const { status } = await postComment(article.slug, body)
    if (status === 200) {
      // コメントを取得し直して更新する
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (slug === undefined) {
        throw new Error('slug is not exist.')
      }

      const [articleResponse, commentsResponse] = await Promise.all([getArticle(slug), getComments(slug)])
      if (articleResponse.status === 200) {
        setArticle(articleResponse.data.article)
      }
      if (commentsResponse.status === 200) {
        console.log(commentsResponse)
        setComments(commentsResponse.data.comments)
      }
    }
    fetchData()
  }, [])

  if (!article) return <></>
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <Link to={authorProfileLink(article)}>
              <img src={article.author.image} />
            </Link>
            <div className="info">
              <Link to={authorProfileLink(article)}>{article.author.username}</Link>
              <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              {/* TODO: follower count */}
              &nbsp; Follow {article.author.username} <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">{article.body}</div>
        </div>

        <hr />

        {/* TODO: follow, favorite, and comment */}
        <ArticleAction article={article} toggleLike={handleToggleLike} />

        {comments !== undefined && <ArticleComments comments={comments} postComment={handlePostComment} />}
      </div>
    </div>
  )
}
