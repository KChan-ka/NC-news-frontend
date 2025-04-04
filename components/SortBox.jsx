export default function SortBox({setSort, sort}) {
    return (
        <div className="sortBox">
            <p className="label">sort by: </p>
            <select className="form" value={sort} onChange={((event) => {setSort(event.target.value)})}>
                <optgroup>
                    <option value="&sort_by=created_at&order=asc">↑ date created</option>
                    <option value="&sort_by=created_at&order=desc">↓ date created</option>
                    <option value="&sort_by=comment_count&order=asc">↑ comments</option>
                    <option value="&sort_by=comment_count&order=desc">↓ comments</option>
                    <option value="&sort_by=votes&order=asc">↑ votes</option>
                    <option value="&sort_by=votes&order=desc">↓ votes</option>
                </optgroup>
            </select>
        </div>
    )
}

