import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getArticlesById } from '../api';
import { CommentList } from './CommentLIst';
import moment from 'moment'


export const SingleArticle = (created_at) => {
    const [singleArticle, setSingleArticle] = useState({});
    const {articleId} = useParams();

    useEffect(()=>{
        getArticlesById(articleId).then((articleData) => {
            setSingleArticle(articleData)
        })
    }, [articleId])

    return (
        <>
        <article className='article-card'>
            <div className="article-header">
            <h2 className="article-title">{singleArticle.title}</h2>
            <h3 className="article-by">By {singleArticle.author} in {singleArticle.topic}</h3>
            </div>
            <h4>{singleArticle.body}</h4>
            <p>Created On: {moment({created_at}).format('L')}</p>
            <div className="article-stats">
            <p>Votes: {singleArticle.votes}</p>
            <p>Comment Count: {singleArticle.comment_count}</p>
            </div>
        </article>
        <CommentList articleId={articleId}/>
        </>
    )
}