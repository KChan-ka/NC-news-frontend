import { useState, useContext, useEffect } from "react";
import { currentUserContext } from "../contexts/User";
import { getAllUsers } from "../Api/ApiRequests";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(currentUserContext)

    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUsers] = useState(null)

    useEffect(() => {
        getAllUsers()
            .then((data) => {
                setSelectedUsers(data[0].username)
                setUsers(data)
        })
    }, [])

    function handleSubmit() {

        setCurrentUser(users.filter((user) => {
            return user.username === selectedUser
        })[0])
        navigate("/")
    }

    return (
        <div className="LoginBox">
            <label className="LoginBoxContents">Please select a user to log in with  </label>
            <select name="Login" className="LoginBoxContents" onChange={(event)=>{setSelectedUsers(event.target.value)}}>
                {users !== null ? (users.map((user) => {
                    return <option key={user.username} value={user.username}>{user.username}</option>
                })) : null}
            </select>
            <button className="Button" onClick={handleSubmit}>Log in</button>
        </div>
    )
}