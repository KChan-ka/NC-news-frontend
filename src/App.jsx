import './App.css'
import Router from './Router.jsx'
import Dropdown from '../components/Dropdown.jsx'
import Home from '../components/Home.jsx'
import Search from '../components/Search.jsx'
import UserProfile from '../components/UserProfile.jsx'
import HomePage from '../components/HomePage.jsx'
import { Route, Routes } from "react-router"
import ArticlePage from '../components/ArticlePage.jsx';


function App() {
  return (
    <div>
      <div className="topBar">
        <Dropdown />
        <Home />
        <Search />
        <UserProfile />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  )
}

export default App
