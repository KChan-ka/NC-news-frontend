import { useContext } from "react";
import { currentUserContext } from "../contexts/User";

export default function CreateArticle () {

    const {currentUser} = useContext(currentUserContext)

    return (
        <div>
            {Object.keys(currentUser).length > 0 ? 
            <button className="CreateArticleButton"> + Create Article</button> :
            null
            }
        </div>
    )
}

