import convertISO8601ToStandardDateTime from "../utils/utils"

export default function Dropdown({ article }) {
    return (
        <div className="articleCard">
            {article.article_img_url ? <img src={article.article_img_url} className="articleCardImage" /> : null}

            <h3>{article.title}</h3>
            <div className="articleCardDetails">
                <p className="articleCardDetails">By, {article.author}, posted on {convertISO8601ToStandardDateTime(article.created_at)}</p>
                <p className="articleCardDetails">comments: {article.comment_count}, votes: {article.votes}</p>
            </div>

        </div>
    )
}

