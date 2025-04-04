import { useEffect, useState } from "react"
import { getAllArticles } from "../Api/ApiRequests"
import ArticleCard from "./ArticleCard"
import { useNavigate } from "react-router-dom"
import NoExistentPage from "./NoExistentPage"

export default function ArticleBody({ currentTopic, setCurrentTopic, sort, setSort, notFoundError, setNotFoundError}) {

    const navigate = useNavigate()
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //populate articles
    useEffect(() => {
        setIsLoading(true)
        getAllArticles(currentTopic, sort)
            .then((data) => {
                if (data.length === 0) {
                    setNotFoundError(true)   
                    navigate(`/articles?limit=${import.meta.env.VITE_GET_MAXIMUM_RESULTS_ON_PAGE}${currentTopic}${sort}`)             
                }
                else {
                    setArticlesList(data)
                    setIsLoading(false)
                    setNotFoundError(false)
                    navigate(`/articles?limit=${import.meta.env.VITE_GET_MAXIMUM_RESULTS_ON_PAGE}${currentTopic}${sort}`)
                }
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [currentTopic, sort])

    return (
        <div>
            {notFoundError ? <NoExistentPage item="articles" setSort={setSort} setCurrentTopic={setCurrentTopic} setNotFoundError={setNotFoundError}/> :
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

