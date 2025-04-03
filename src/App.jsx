import './App.css'
import Home from '../components/Home.jsx'
import Search from '../components/Search.jsx'
import UserProfile from '../components/UserProfile.jsx'
import HomePage from '../components/HomePage.jsx'
import { Route, Routes } from "react-router"
import ArticlePage from '../components/ArticlePage.jsx';
import LoginScreen from '../components/LogInScreen.jsx'

function App() {
  return (
    <div>
      <div className="topBar">
        <Home />
        <Search />
        <UserProfile />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/articles" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
