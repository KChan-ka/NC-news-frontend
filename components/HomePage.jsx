import CreateArticle from '../components/CreateArticle.jsx'
import SortBox from '../components/SortBox.jsx'
import ArticleBody from '../components/ArticleBody.jsx'
import TopicsDropdown from '../components/TopicsDropdown.jsx'
import { useState, useEffect } from 'react'
import { getAllTopics } from '../Api/ApiRequests.jsx'

export default function HomePage({ sort, setSort, currentTopic, setCurrentTopic, notFoundError, setNotFoundError }) {

    const [topics, setTopics] = useState([])

    //populate topics
    useEffect(() => {
        getAllTopics()
            .then((data) => {
                setTopics(data)
            })
    }, [])

    return (
        <div>
            <div className="helpbar">
                <CreateArticle />
                <TopicsDropdown
                    setCurrentTopic={setCurrentTopic}
                    currentTopic={currentTopic}
                    topics={topics}
                    setTopics={setTopics}
                />
                <SortBox setSort={setSort} sort={sort} />
            </div>
            <ArticleBody
                currentTopic={currentTopic}
                setCurrentTopic={setCurrentTopic}
                sort={sort}
                setSort={setSort}
                topics={topics}
                setTopics={setTopics}
                notFoundError={notFoundError} 
                setNotFoundError={setNotFoundError}
            />
        </div>

    )
}