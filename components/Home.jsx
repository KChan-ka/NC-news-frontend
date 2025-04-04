import { Link } from "react-router-dom"

export default function Home({setSort, setCurrentTopic}) {

    function handleHomePage () {
        setSort("")
        setCurrentTopic("")
    }

    return (
        <>
            <Link to="/" onClick={handleHomePage} className="Home"><h2>NC News</h2></Link>
        </>
    )
}

