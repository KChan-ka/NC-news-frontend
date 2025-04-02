import convertISO8601ToStandardDateTime from "../utils/utils"
import { useState, useEffect } from "react"
import { getArticleById, getCommentsByArticleId } from "../Api/ApiRequests"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"



export default function ArticlePage() {
    const { article_id } = useParams()

    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleById(article_id)
            .then((data) => {
                setArticle(data)
            })
    }, [])

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((data) => {
                console.log(data, "<<< data")
                setComments(data)
            })
    }, [])

    return (
        <div className="articlePage">
            <div>
                <p className="articlePageTopic">TOPIC: {article.topic}</p>
                <h1 className="articlePageTitle">{article.title}</h1>
                <img src={article.article_img_url} className="articlePageImg" />

                <div className="articlePageDetails">
                    <p>BY {article.author}</p>
                    <p className="articlePageCommentsCount">COMMENTS: {comments.length}</p>
                </div>
                <p className="articlePageDate">POSTED ON: {convertISO8601ToStandardDateTime(article.created_at)}</p>
                <p className="articlePageBody">{article.body}</p>
            </div>

            <div>
                <h2 id="CommentsHeader">Comments ({comments.length})</h2>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </div>
        </div >
    )


}