import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Article } from '../api/article-api'
import { authorProfileLink } from '../utils/article'

type ArticleActionProps = {
  article: Article
  toggleLike: (article: Article) => void
}

export const ArticleAction = ({ article, toggleLike }: ArticleActionProps) => {
  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <Link to={authorProfileLink(article)} className="author">
            {article.author.username}
          </Link>
          <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
        {/* TODO: implement follow */}
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow {article.author.username}
        </button>
        &nbsp;
        <button
          className={clsx('btn btn-sm', article.favorited ? 'btn-primary' : 'btn-outline-primary')}
          onClick={() => toggleLike(article)}
        >
          <i className="ion-heart"></i>
          &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
        </button>
      </div>
    </div>
  )
}
