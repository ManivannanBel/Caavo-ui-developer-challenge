import React from 'react'
import './GroupDetails.css'
import GroupIcon from '@material-ui/icons/Group';

function GroupDetails(props) {

    const { 
        groupName,
        setGroupName, 
        groupDescription,
        setGroupDescription,
        groupLogo,
        setGroupLogo
     } = props;

    return (
        <section className={'group__details__wrapper'}>
            <div className="img__wrapper">
                <GroupIcon />
                <input className="group_img_upload" id="grp-logo-img-upld" type="file"/>
            </div>
            <span className="inp__label">Name</span>
            <input
                className="input__field"
                type="text" 
                value={groupName} 
                placeholder="group name"
                onChange={(e) => setGroupName(e.target.value)}
            />
            <span className="inp__label">Description</span>
            <input 
                className="input__field"
                type="text" 
                value={groupDescription} 
                placeholder="group description"
                onChange={(e) => setGroupDescription(e.target.value)}
            />
        </section>
    )
}

export default GroupDetails
