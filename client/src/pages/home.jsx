import {useEffect} from 'react'

// components
import UserDetails from '../components/UserDetails.jsx'
import UserForm from "../components/UserForm.jsx";

// hooks
import { useUsersContext } from "../hooks/useUsersContext.jsx";

const Home = () => {
    const {users, dispatch} = useUsersContext()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:4000/api/users')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_USERS', payload: json})
            }
        }

        fetchUsers()

    }, [])

    return (
        <div className={"home"}>
            <div className={"users"}>
                {users && users.map((user) => (
                    <UserDetails key={user._id} user={user}/>
                ))}
            </div>
            <UserForm/>
        </div>
    )
}
export default Home
