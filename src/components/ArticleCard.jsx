import {Link} from "react-router-dom";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {
    return (
        <Link to={`/articles/${article_id}`}>
      <article className="article-card">
        <h2>{title}</h2>
        <h3>By {author} in {topic}</h3>
        <h4>{body}</h4>
        <div className="article-stats">
        <p>Votes: {votes} Comments: {comment_count}</p>
        </div>
        </article>
      </Link>
    );
  }
  export default ArticleCard;

