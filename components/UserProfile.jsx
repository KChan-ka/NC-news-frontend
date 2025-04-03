import { useContext } from "react";
import { currentUserContext } from "../contexts/User";
import { Link } from "react-router-dom";


export default function UserProfile() {

    const { currentUser, setCurrentUser } = useContext(currentUserContext)

    function handleLogout() {
        setCurrentUser({})
    }

    return (
        <div>
            {Object.keys(currentUser).length === 0 ? (
                <div>
                    <Link to="/login">
                        <img src="../Resources/UserProfile.png" className="profileImage"></img>
                        <p>Log in</p>
                    </Link>
                </div>
            ) : (
                <div className="LoginProfile">
                    <img src={currentUser.avatar_url} className="profileImage" />
                    <p>{currentUser.username}</p>
                    <p onClick={handleLogout}>Log out</p>
                </div>
            )}
        </div>
    )
}

