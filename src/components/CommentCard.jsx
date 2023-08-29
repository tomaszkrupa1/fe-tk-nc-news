import moment from 'moment'

export const CommentCard =({comment_id, body, votes, author, created_at}) => {
    return (
        <div className='comment-card'>
            <h3>{author}</h3>
            <p>{body}</p>
            <p>Votes: {votes}</p>
            <p>Created On: {moment({created_at}).format('L')}</p>
        </div>
    )
}