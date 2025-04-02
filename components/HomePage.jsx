import CreateArticle from '../components/CreateArticle.jsx'
import SortBox from '../components/SortBox.jsx'
import ArticleBody from '../components/ArticleBody.jsx'

export default function HomePage() {
    return (
        <div>
            <div className="helpbar">
                <CreateArticle />
                <SortBox />
            </div>
            <ArticleBody />
        </div>

    )
}