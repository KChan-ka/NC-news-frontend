import convertISO8601ToStandardDateTime from "../utils/utils"
import { Link } from "react-router-dom";


export default function ArticleCard({ article }) {

    return (
        <Link to={`/articles/${article.article_id}`} relative="path" className="articleCard">
            {article.article_img_url ? <img src={article.article_img_url} className="articleCardImage" /> : null}
            < h3 > {article.title}</h3 >
            <div className="articleCardDetails">
                <p className="articleCardDetails">By, {article.author}, {convertISO8601ToStandardDateTime(article.created_at)}</p>
                <p className="articleCardDetails">comments: {article.comment_count}, votes: {article.votes}</p>
            </div>
        </Link >
    )
}

