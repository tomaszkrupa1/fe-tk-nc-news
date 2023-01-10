import {Link} from "react-router-dom";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {
    return (
        <Link to={`/articles/${article_id}`}>
      <article className="article-card">
        <h2>{title}</h2>
        <h2>{topic}</h2>
        <h2>{author}</h2>
        <p>{body}</p>
        <h4>{votes}</h4>
        <h4>{comment_count}</h4>

        </article>
      </Link>
    );
  }
  export default ArticleCard;

