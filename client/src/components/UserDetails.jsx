import React from 'react'

const UserDetails = ( { user }) => {
    return (
        <div className={'user-details'}>
            <h4> {user.profession}</h4>
            <p><strong>Phone Number: </strong> {user.phoneNumber}</p>
            <p><strong>Load: </strong> {user.load}</p>
            <p>{user.createdAt}</p>
        </div>
    )
}
export default UserDetails
