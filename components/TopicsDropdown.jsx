import { useState, useEffect } from "react"
import { getAllTopics } from "../Api/ApiRequests"

export default function SearchByTopic({currentTopic, setCurrentTopic}) {

    const [topics, setTopics] = useState([])

    //populate topics
    useEffect(() => {
        getAllTopics()
            .then((data) => {
                setTopics(data)
            })
    }, [])

    return (
        <div>
            <select className="sortBox" name="Login" onChange={((event) => {setCurrentTopic(event.target.value)})}>
                <option value="All">All Topics</option>
                    {topics !== null ?
                        (topics.map((topic) => {
                            return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                        })) :
                        null}
            </select>
        </div>
    )
}
