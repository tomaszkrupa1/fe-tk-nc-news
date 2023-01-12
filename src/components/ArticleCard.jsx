import {Link} from "react-router-dom";
import { VoteButtons } from "./VoteButtons";
import { useState } from "react";


function ArticleCard({article_id, title, topic, author, body, created_at, votes, comment_count}) {

  const [incVotes, setIncVotes] = useState(0)

  let props = {article_id:article_id, incVotes:incVotes, setIncVotes:setIncVotes}

    return (
      <div className="article-card">
        <Link to={`/articles/${article_id}`}>
      <article>
        <h2>{title}</h2>
        <h3>By {author} in {topic}</h3>
        <h4>{body}</h4>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
        </article>
      </Link>
        <VoteButtons {...props}/>
        </div>
    );
  }
  export default ArticleCard;

