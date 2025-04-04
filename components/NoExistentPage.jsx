import { Link } from "react-router-dom"

export default function NoExistentPage ({item, setSort, setCurrentTopic}) {

    function handleHomePage () {
        setSort("")
        setCurrentTopic("")
        setNotFoundError(false)
    }

    return (
        <div className="center">
            <img src="../Resources/Detective.png" />
            <h2>Sorry, we couldn't find the {item}</h2>
            <Link onClick={handleHomePage} to="/">Go back to home</Link>
        </div>
    )
}