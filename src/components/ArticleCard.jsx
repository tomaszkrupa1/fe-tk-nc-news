import {Link} from "react-router-dom";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {
    return (
        <Link to={`/articles/${article_id}`}>
      <article className="article-card">
        <h2>{title}</h2>
        <h3>By {author} in {topic}</h3>
        <h4>{body}</h4>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>

        </article>
      </Link>
    );
  }
  export default ArticleCard;

