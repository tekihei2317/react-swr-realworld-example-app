import { useState } from 'react'
import { Comment } from '../api/comment-api'
import { ArticleComment } from './ArticleComment'

type ArticleCommentsProps = {
  comments: Comment[]
  postComment: (body: string) => void
}

export const ArticleComments = ({ comments, postComment }: ArticleCommentsProps) => {
  const [commentBody, setCommentBody] = useState<string>('')

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setCommentBody(event.currentTarget.value)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    postComment(commentBody)
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form" onSubmit={handleSubmit}>
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
              value={commentBody}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            <button className="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        {comments.map((comment, index) => (
          <ArticleComment comment={comment} key={index} />
        ))}

        {/* <div className="card">
          <div className="card-block">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              Jacob Schmidt
            </a>
            <span className="date-posted">Dec 29th</span>
            <span className="mod-options">
              <i className="ion-edit"></i>
              <i className="ion-trash-a"></i>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
