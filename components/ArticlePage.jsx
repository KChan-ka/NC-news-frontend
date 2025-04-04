import convertISO8601ToStandardDateTime from "../utils/utils"
import { useState, useEffect, useContext } from "react"
import { getArticleById, getCommentsByArticleId, patchByArticleId, deleteCommentByCommentId } from "../Api/ApiRequests"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"
import { currentUserContext } from "../contexts/User";
import { postCommentByArticleId } from "../Api/ApiRequests"
import NoExistentPage from "./NoExistentPage"


export default function ArticlePage() {

    const { currentUser } = useContext(currentUserContext)

    const { article_id } = useParams()

    const [newComment, setNewComment] = useState("")

    const [submitComment, setSubmitComment] = useState(false)

    const [emptyCommentError, setEmptyCommentError] = useState(false)
    const [saveCommentError, setSaveCommentError] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [article, setArticle] = useState({})
    const [articleError, setArticleError] = useState(false)
    const [comments, setComments] = useState([])

    const [votes, setVotes] = useState(0)
    const [errorVotes, setErrorVotes] = useState(null)

    const [hasVotedUp, setHasVotedUp] = useState(false)
    const [hasVotedDown, setHasVotedDown] = useState(false)

    const [hasDeletedComment, setHasDeletedComment] = useState(false)
    const [hasDeletedCommentError, setHasDeletedCommentError] = useState(false)

    //Initial page load
    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
            .then((data) => {
                if (data.length === 0) {
                    setArticleError(true)
                }
                else {
                    setArticle(data)
                    setVotes(data.votes)
                    setArticleError(false)
                    getCommentsByArticleId(article_id)
                        .then((data) => {
                            setComments(data)
                            setIsLoading(false)
                        })
                        .catch(() => {
                        })
                }
            })
            .catch(() => {
                setArticleError(true)
            })
    }, [])

    //refresh comments if comment is submitted
    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data)
                setIsLoading(false)
                setSubmitComment(false)
                setHasDeletedComment(false)
            })
            .catch(() => {           
            })
    }, [submitComment, hasDeletedComment])

    //this function handles the voting system.
    //if first time voting, then move votes by 1
    //if voting opposite to prior attempt, move by 2
    //if clicking the same voting arrow twice, undo the voting
    function handleVote(amount, buttonVoteUp) {

        //undo if already voted up or down
        if (buttonVoteUp && hasVotedUp) {
            setHasVotedUp(false)
            setHasVotedDown(false)
            amount -= 2
        }

        else if (!buttonVoteUp && hasVotedDown) {
            setHasVotedDown(false)
            setHasVotedUp(false)
            amount += 2
        }

        //adjust by 2 if voting opposite directions
        else if (buttonVoteUp && !hasVotedUp && hasVotedDown) {
            setHasVotedUp(true)
            setHasVotedDown(false)
            amount++
        }

        else if (!buttonVoteUp && !hasVotedDown && hasVotedUp) {
            setHasVotedUp(false)
            setHasVotedDown(true)
            amount--
        }

        //first time voting
        else if (buttonVoteUp && !hasVotedUp && !hasVotedDown) {
            setHasVotedUp(true)
            setHasVotedDown(false)
        }
        else if (!buttonVoteUp && !hasVotedDown && !hasVotedUp) {
            setHasVotedUp(false)
            setHasVotedDown(true)
        }

        setVotes(votes + amount)
        setErrorVotes(null)

        patchByArticleId(article.article_id, { "inc_votes": amount })
            .catch(() => {
                setVotes(article.votes - amount)
                setErrorVotes("Your vote was not successful, Please try again")
            })
    }

    //this function handles saving a new comment
    function handlePostComment(event) {
        event.preventDefault()

        if (newComment.length === 0) {
            setEmptyCommentError(true)
        }
        else {
            postCommentByArticleId(article.article_id, { "username": currentUser.username, "body": newComment })
                .then(() => {
                    setEmptyCommentError(false)
                    setSaveCommentError(false)
                    setHasDeletedCommentError(false)
                    setSubmitComment(true)
                })
                .catch(() => {
                    setSaveCommentError(true)
                })
        }
    }

    //this function handles deleting a new comment
    function handleDeleteComment(commentId) {
        setHasDeletedComment(true)
        deleteCommentByCommentId(commentId)
            .catch(() => {
                setHasDeletedCommentError(true)
            })
    }

    return (
        <div>
            {articleError ? <NoExistentPage item="article" /> :
                isLoading ? <p>Loading Article ...</p> : <div className="articlePage">
                    <div>
                        <p className="articlePageTopic">TOPIC: {article.topic}</p>
                        <h1 className="articlePageTitle">{article.title}</h1>
                        <img src={article.article_img_url} className="articlePageImg" />

                        <div className="articlePageDetails">
                            <p>BY {article.author}</p>
                            <p className="articlePageCommentsCount">COMMENTS: {comments.length}</p>
                        </div>
                        <p className="articlePageDate">POSTED ON: {convertISO8601ToStandardDateTime(article.created_at)}</p>
                        <p className="articlePageBody">{article.body}</p>
                        <div className="articlePageVotes">
                            <img src="../Resources/UpArrow.png" className="arrowImg" onClick={() => { handleVote(1, true) }} />
                            <p>{votes}</p>
                            <img src="../Resources/DownArrow.png" className="arrowImg" onClick={() => { handleVote(-1, false) }} />
                        </div>
                        {errorVotes ? <p className="errorMessageRight">{errorVotes}</p> : null}
                    </div>

                    <div>
                        <h2 id="CommentsHeader">Comments ({comments.length})</h2>
                        {comments.map((comment) => {
                            return <CommentCard
                                key={comment.comment_id}
                                comment={comment}
                                handleDeleteComment={handleDeleteComment}
                            />
                        })}
                    </div>
                    {Object.keys(currentUser).length !== 0 ?
                        <div>
                            <form onSubmit={handlePostComment} className="submitForm">
                                <label htmlFor="newComment" className="commentsBody">Post your comment: </label>
                                <textarea
                                    className="textarea"
                                    id="newComment"
                                    name="newComment"
                                    onChange={(event) => {
                                        setNewComment(event.target.value)
                                    }} />
                                <button type="submit" className="Button">Submit</button>
                            </form>
                            {emptyCommentError ? <p className="error">No comment was entered, please type in something</p> : null}
                            {saveCommentError ? <p className="error">Failed to save comment, please try again</p> : null}
                        </div>
                        :
                        null
                    }
                </div >
            }
        </div >
    )
}