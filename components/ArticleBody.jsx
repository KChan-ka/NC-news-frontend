import { useEffect, useState } from "react"
import { getAllArticles } from "../Api/ApiRequests"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ArticleBody({ currentTopic, setCurrentTopic, sort, setSort }) {

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEmptyArticleListError, setIsEmptyArticleListError] = useState(false)

    //populate articles
    useEffect(() => {
        setIsLoading(true)
        getAllArticles(currentTopic, sort)
            .then((data) => {
                //if all topics, return all articles
                if (data.length === 0) {
                    setIsEmptyArticleListError(true)
                }
                else {
                    setArticlesList(data)
                    setIsLoading(false)
                    setIsEmptyArticleListError(false)
                    navigate(`/articles?limit=${import.meta.env.VITE_GET_MAXIMUM_RESULTS_ON_PAGE}${currentTopic}${queryURL}`)
                }
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [currentTopic, sort])

    //initialise the page
    useEffect(() => {
        if (searchParams.get("topic") !== null) {
            setCurrentTopic(`&topic=${searchParams.get("topic")}`)
        }
        if (searchParams.get("sort_by") !== null) {
            setCurrentTopic(`&sort_by=${searchParams.get("sort_by")}&order=${searchParams.get("order")}`)
        }
    }, [])

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

