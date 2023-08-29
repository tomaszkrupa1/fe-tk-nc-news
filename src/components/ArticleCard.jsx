import {Link} from "react-router-dom";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {
    return (
        <Link to={`/articles/${article_id}`} style={{ textDecoration: 'none' }}>
      <article className="article-card">
        <div className="article-header">
        <h2 className="article-title">{title}</h2>
        <h3 className="article-by">By {author} in {topic}</h3>
        </div>
        <h4 className="article-body">{body.substring(0, 400)}...</h4>
        <div className="article-stats">
        <p>Votes: {votes} Comments: {comment_count}</p>
        </div>
        </article>
      </Link>
    );
  }
  export default ArticleCard;

