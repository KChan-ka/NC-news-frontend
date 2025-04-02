import { Route, Routes } from "react-router"
import ArticlePage from '../components/ArticlePage.jsx';

export default function Router() {
    return (
        <Routes>
            <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>

    )
}