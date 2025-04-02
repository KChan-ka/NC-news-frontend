import { useEffect, useState } from "react"
import { getAllArticles } from "../Api/ApiRequests"
import ArticleCard from "./ArticleCard"

export default function ArticleBody() {

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //populate articles
    useEffect(() => {
        setIsLoading(true)
        getAllArticles()
            .then((data) => {
                setArticlesList(data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])


    return (
        <div>
            {isLoading ? <p>Loading Articles...</p> : 
            <div className="ArticleBody">
                {articlesList.map((article) => {
                    return <ArticleCard key={article.article_id} article={article} />
                })}
            </div>
            }
        </div>

    )
}

