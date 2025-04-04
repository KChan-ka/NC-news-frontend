import './App.css'
import Home from '../components/Home.jsx'
import Search from '../components/Search.jsx'
import UserProfile from '../components/UserProfile.jsx'
import HomePage from '../components/HomePage.jsx'
import { Route, Routes } from "react-router"
import ArticlePage from '../components/ArticlePage.jsx';
import LoginScreen from '../components/LogInScreen.jsx';
import NoExistentPage from '../components/NoExistentPage.jsx'
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

function App() {

  const [searchParams] = useSearchParams()


  const [currentTopic, setCurrentTopic] = useState()
  const [sort, setSort] = useState()
  const [notFoundError, setNotFoundError] = useState(false)


  useState(() => {
    if (searchParams.get("topic") !== null) {
      setCurrentTopic(`&topic=${searchParams.get("topic")}`)
    } else {
      setCurrentTopic(``)
    }

    if (searchParams.get("sort_by") !== null) {
      setSort(`&sort_by=${searchParams.get("sort_by")}&order=${searchParams.get("order")}`)
    } else {
      setSort(``)
    }
  }) 


  return (
    <div>
      <div className="topBar">
        <Home setCurrentTopic={setCurrentTopic} setSort={setSort} />
        <Search />
        <UserProfile />
      </div>
      <Routes>
        <Route path="/" element={<HomePage currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} sort={sort} setSort={setSort} notFoundError={notFoundError} setNotFoundError={setNotFoundError} />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/articles" element={<HomePage currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} sort={sort} setSort={setSort} notFoundError={notFoundError} setNotFoundError={setNotFoundError} />} />
        <Route path="*" element={<NoExistentPage item="page" setCurrentTopic={setCurrentTopic} setSort={setSort} setNotFoundError={setNotFoundError} />} />
      </Routes>
    </div>
  )
}

export default App
