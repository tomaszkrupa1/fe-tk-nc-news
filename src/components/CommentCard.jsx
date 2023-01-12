import moment from 'moment'

export const CommentCard =({comment_id, body, votes, author, created_at}) => {
    return (
        <div className='comment-card'>
            <h3>By {author}</h3>
            <h4>{body}</h4>
            <p>Votes: {votes}</p>
            <p>Created On: {moment({created_at}).format('L')}</p>
        </div>
    )
}