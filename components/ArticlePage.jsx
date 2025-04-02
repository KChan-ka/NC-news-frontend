import convertISO8601ToStandardDateTime from "../utils/utils"
import { useState, useEffect } from "react"
import { getArticleById, getCommentsByArticleId, patchByArticleId } from "../Api/ApiRequests"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"



export default function ArticlePage() {
    const { article_id } = useParams()

    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    
    const [votes, setVotes] = useState(0)
    const [errorVotes, setErrorVotes] = useState(null)

    const [hasVotedUp, setHasVotedUp] = useState(false)
    const [hasVotedDown, setHasVotedDown] = useState(false)

    useEffect(() => {
        getArticleById(article_id)
            .then((data) => {
                setArticle(data)
                setVotes(data.votes)
            })
            .then(() => {
                getCommentsByArticleId(article_id)
                .then((data)=> {
                    setComments(data)
                })
            }
        )
    }, [])

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
        else if (!buttonVoteUp && !hasVotedDown && !hasVotedUp){
            setHasVotedUp(false)
            setHasVotedDown(true)
        }
        
        setVotes(votes + amount)
        setErrorVotes(null)

        patchByArticleId(article.article_id, {"inc_votes": amount})
            .catch(() => {
                setVotes(article.votes - amount)
                setErrorVotes("Your vote was not successful, Please try again")
            })
    }

    return (
        <div className="articlePage">
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
                    <img src="../Resources/UpArrow.png" className="arrowImg" onClick={() => {handleVote(1, true)}} />
                    <p>{votes}</p>
                    <img src="../Resources/DownArrow.png" className="arrowImg" onClick={() => {handleVote(-1, false)}}/>
                </div>
                {errorVotes ? <p className="errorMessageRight">{errorVotes}</p> : null}
            </div>

            <div>
                <h2 id="CommentsHeader">Comments ({comments.length})</h2>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </div>
        </div >
    )


}