import {Link} from "react-router-dom";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {
    return (
        <Link to={`/articles/${article_id}`}>
      <article className="article-card">
        <h1>{title}</h1>
        <h1>{topic}</h1>
        <h1>{author}</h1>
        <h1>{body}</h1>
        <h1>{votes}</h1>
        <h1>{comment_count}</h1>

        </article>
      </Link>
    );
  }
  export default ArticleCard;

