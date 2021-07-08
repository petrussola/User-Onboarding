import React from 'react';

export default function UserList ({userList}) {
    return (
        <div>
            {
                userList.map( user => {
                    return <div>{user.name}</div>
                })
            }
        </div>
    )
}