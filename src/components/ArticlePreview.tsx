import { Link } from 'react-router-dom'
import { Article } from '../api/article-api'

export const ArticlePreview = ({ article }: { article: Article }) => {
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
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i>
          {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  )
}
