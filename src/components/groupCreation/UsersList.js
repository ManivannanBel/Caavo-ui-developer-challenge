import React from 'react';
import './UsersList.css';
import UserCard from './UserCard';

function UsersList(props) {

    const {users,
            selectUser,
            removeSelectedUser,
            toggleSortOrder} = props;

    return (
        <section>
            <h3 className="list__title">List of availbale users</h3>
            <button onClick={(e) => toggleSortOrder(e)}>Sort users</button>
            <div className="users__list_wrapper">
                {
                    users.map((user) => <UserCard
                                            key={user.id} 
                                            name={user.name}
                                            Image={user.Image}
                                            id={user.id}
                                            selectUser={selectUser}
                                            removeSelectedUser={removeSelectedUser}
                                        />)
                }
            </div>
        </section>
    )
}

export default UsersList
