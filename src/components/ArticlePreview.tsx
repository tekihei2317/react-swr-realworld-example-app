import { Link } from 'react-router-dom'
import { Article } from '../api/article-api'
import { clsx } from 'clsx'

type ArticlePreviewProps = {
  article: Article
  toggleLike: (article: Article) => Promise<void>
}

export const ArticlePreview = ({ article, toggleLike }: ArticlePreviewProps) => {
  const authorProfileLink = `/profile/${article.author.username}`

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={authorProfileLink}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link to={authorProfileLink} className="author">
            {article.author.username}
          </Link>
          <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className={clsx('btn btn-sm pull-xs-right', article.favorited ? 'btn-primary' : 'btn-outline-primary')}
          onClick={() => toggleLike(article)}
        >
          <i className="ion-heart"></i>
          {article.favoritesCount}
        </button>
      </div>
      <Link to={`/articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  )
}
