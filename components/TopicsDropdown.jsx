import { useState, useEffect } from "react"
import { getAllTopics } from "../Api/ApiRequests"

export default function SearchByTopic({ setCurrentTopic }) {

    const [topics, setTopics] = useState([])

    //populate topics
    useEffect(() => {
        getAllTopics()
            .then((data) => {
                setTopics(data)
            })
    }, [])

    function handleTopicChange(event) {
        setCurrentTopic(event.target.value)
    }

    return (
        <div className="sortBox">
            <p className="label">topics: </p>
            <select className="form" name="Login" onChange={handleTopicChange}>
                <optgroup>
                    <option value="">All Topics</option>
                    {topics !== null ?
                        (topics.map((topic) => {
                            return <option key={topic.slug} value={`&topic=${topic.slug}`}>{topic.slug}</option>
                        })) :
                        null}
                </optgroup>
            </select>
        </div>
    )
}
