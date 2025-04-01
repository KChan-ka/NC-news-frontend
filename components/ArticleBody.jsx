import { useEffect, useState } from "react"
import getAllArticles from "../Api/ApiRequests"
import Article from "./Article"

export default function BodyArticle() {

    const [articlesList, setArticlesList] = useState([])

    //populate articles
    useEffect(() => {
        getAllArticles()
            .then((data) => {
                setArticlesList(data)
            })
    }, [])


    return (
        <div className="ArticleBody">
            {articlesList.map((article) => {
                return <Article key={article.article_id} article={article}/>
            })}
        </div>
    )
}

