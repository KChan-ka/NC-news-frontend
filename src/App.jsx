import './App.css'
import Dropdown from '../components/Dropdown.jsx'
import Home from '../components/Home.jsx'
import Search from '../components/Search.jsx'
import UserProfile from '../components/UserProfile.jsx'
import CreateArticle from '../components/CreateArticle.jsx'
import SortBox from '../components/SortBox.jsx'
import BodyArticle from '../components/ArticleBody.jsx'

function App() {
  console.log(import.meta.env.VITE_API_URL, "<<<react url")

  return (
    <div>
      <div className="topBar">
        <Dropdown />
        <Home />
        <Search />
        <UserProfile />
      </div>
      <div className="helpbar">
        <CreateArticle />
        <SortBox />
      </div>
      <div>
        <BodyArticle />
      </div>
    </div>
  )
}

export default App
