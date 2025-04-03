import convertISO8601ToStandardDateTime from "../utils/utils"
import { useContext } from "react";
import { currentUserContext } from "../contexts/User";


export default function CommentCard({ comment, handleDeleteComment }) {

    const { currentUser } = useContext(currentUserContext)

    return (
        <div>
            <div className="commentHeader">
                <p id="commentDetails">By: {comment.author} on {convertISO8601ToStandardDateTime(comment.created_at)}</p>
                {currentUser.username === comment.author ? 
                    <button onClick={(() => {handleDeleteComment(comment.comment_id)})} className="deleteCommentButton">Delete comment</button> :
                    null}
            </div>
            <p className="commentsBody">{comment.body}</p>
            <p className="commentsVotes">votes: {comment.votes}</p>
        </div>)
}

