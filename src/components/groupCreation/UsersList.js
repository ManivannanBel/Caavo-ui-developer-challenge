import React from 'react';
import './UsersList.css';
import UserCard from './UserCard';

function UsersList(props) {

    const {users,
            selectUser,
            removeSelectedUser} = props;

    return (
        <div className="users__list_wrapper">
            {
                users.map((user) => <UserCard
                                        key={user.Id} 
                                        name={user.name}
                                        Image={user.Image}
                                        id={user.id}
                                        selectUser={selectUser}
                                        removeSelectedUser={removeSelectedUser}
                                    />)
            }
        </div>
    )
}

export default UsersList
