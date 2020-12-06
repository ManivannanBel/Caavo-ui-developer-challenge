import React from 'react'
import './UserCard.css'

function UserCard(props) {

    const {name, Image, id} = props;

    return (
        <div className="user__card__wrapper">
            <img src={Image}/>
            <div>{name}</div>
        </div>
    )
}

export default UserCard
