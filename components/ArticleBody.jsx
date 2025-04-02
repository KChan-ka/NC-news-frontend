import { useEffect, useState, Route, Routes } from "react"
import {getAllArticles} from "../Api/ApiRequests"
import ArticleCard from "./ArticleCard"

export default function ArticleBody() {

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
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </div>
    )
}

