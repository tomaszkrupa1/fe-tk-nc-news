import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import "../App.css";


    function ArticleList() {
        const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            getArticles()
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
        }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }


    
    return (
        <div className="article-list">
          <ul>
            {articles.map((article) => {
               return <ArticleCard key={article.article_id} {...article} />;
            })}
          </ul>
        </div>
      );

};

export default ArticleList;