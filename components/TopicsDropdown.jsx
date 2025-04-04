
export default function SearchByTopic({ setCurrentTopic, currentTopic, topics }) {

    function handleTopicChange(event) {
        setCurrentTopic(event.target.value)
    }

    return (
        <div className="sortBox">
            <p className="label">topics: </p>
            <select className="form" name="Login" value={currentTopic} onChange={handleTopicChange}>
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
