import { Link } from 'react-router-dom'
import { Comment } from '../api/comment-api'

function commentAuthorProfileLink(comment: Comment) {
  return `/profile/${comment.author.username}`
}

export const ArticleComment = ({ comment }: { comment: Comment }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to={commentAuthorProfileLink(comment)} className="comment-author">
          <img src={comment.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to={commentAuthorProfileLink(comment)} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">{new Date(comment.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  )
}
