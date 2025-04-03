import CreateArticle from '../components/CreateArticle.jsx'
import SortBox from '../components/SortBox.jsx'
import ArticleBody from '../components/ArticleBody.jsx'
import TopicsDropdown from '../components/TopicsDropdown.jsx'
import { useState } from 'react'

export default function HomePage() {
    const [currentTopic, setCurrentTopic] = useState("All")


    return (
        <div>
            <div className="helpbar">
                <CreateArticle />
                <TopicsDropdown currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>
                <SortBox />
            </div>
            <ArticleBody currentTopic={currentTopic}/>
        </div>

    )
}