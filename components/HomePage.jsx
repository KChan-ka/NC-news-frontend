import CreateArticle from '../components/CreateArticle.jsx'
import SortBox from '../components/SortBox.jsx'
import ArticleBody from '../components/ArticleBody.jsx'
import TopicsDropdown from '../components/TopicsDropdown.jsx'
import { useState } from 'react'

export default function HomePage() {
    const [currentTopic, setCurrentTopic] = useState("")
    const [sort, setSort] = useState("")


    return (
        <div>
            <div className="helpbar">
                <CreateArticle />
                <TopicsDropdown setCurrentTopic={setCurrentTopic}/>
                <SortBox setSort={setSort}/>
            </div>
            <ArticleBody currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} sort={sort} setSort={setSort}/>
        </div>

    )
}