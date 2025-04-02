import convertISO8601ToStandardDateTime from "../utils/utils"


export default function CommentCard({comment}) {
    return (
        <div>
            <p id="commentDetails">By: {comment.author} on {convertISO8601ToStandardDateTime(comment.created_at)}</p>
            <p className="commentsBody">{comment.body}</p>
            <p className="commentsVotes">votes: {comment.votes}</p>
        </div>)
}