import React from 'react'
import './GroupDetails.css'

function GroupDetails(props) {

    const { 
        groupName,
        setGroupName, 
        groupDescription,
        setGroupDescription,
        groupLogo,
     } = props;

    return (
        <section className={'group__details__wrapper'}>
            <div className="img__wrapper">
                <img src="https://picsum.photos/200" />
            </div>
            <span className="inp__label">Name</span>
            <input
                className="input__field"
                type="text" 
                value={groupName} 
                onChange={(e) => setGroupName(e.target.value)}
            />
            <span className="inp__label">Description</span>
            <input 
                className="input__field"
                type="text" 
                value={groupDescription} 
                onChange={(e) => setGroupDescription(e.target.value)}
            />
        </section>
    )
}

export default GroupDetails
