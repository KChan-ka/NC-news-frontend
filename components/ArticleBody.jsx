import { useEffect, useState } from "react"
import { getAllArticles } from "../Api/ApiRequests"
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ArticleBody({ currentTopic }) {

    const navigate = useNavigate()

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEmptyArticleListError, setIsEmptyArticleListError] = useState(false)

    //populate articles
    useEffect(() => {
        setIsLoading(true)
        getAllArticles()
            .then((data) => {
                //if all topics, return all articles
                if (currentTopic === "All") {
                    setArticlesList(data)
                    setIsLoading(false)
                    setIsEmptyArticleListError(false)
                    navigate("/")
                }
                //else return articles filtered by topics
                //if no articles, display an error tag
                else {
                    const filteredArticles = data.filter((article) => {
                        return article.topic === currentTopic
                    })
                    if (filteredArticles.length === 0) {
                        setIsEmptyArticleListError(true)
                    }
                    else {
                        setIsEmptyArticleListError(false)
                        setArticlesList(filteredArticles)
                        setIsLoading(false)
                        navigate(`/topics/${currentTopic}`)
                    }
                }
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [currentTopic])


    return (
        <div>
            {isEmptyArticleListError ? <p>No Articles</p> :
                isLoading ? <p>Loading Articles...</p> :
                    <div className="ArticleBody">
                        {articlesList.map((article) => {
                            return <ArticleCard key={article.article_id} article={article} />
                        })}
                    </div>
            }
        </div>

    )
}

