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

     const handleImageSelect = (e) => {
        e.preventDefault();
        let image = e.target.files[0];
        setGroupLogo(image);
     }

    return (
        <section className={'group__details__wrapper'}>
            <div className="img__wrapper">
                {groupLogo === null &&
                    <GroupIcon />
                }
                {groupLogo !== null &&
                    <img src={URL.createObjectURL(groupLogo)} />
                }
                <input className="group_img_upload" id="grp-logo-img-upld" type="file" onChange={handleImageSelect}/>
            </div>
            <span className="inp__label">Name</span>
            <input
                className="input__field"
                type="text" 
                value={groupName} 
                placeholder="group name"
                onChange={(e) => setGroupName(e.target.value)}
                required
            />
            <span className="inp__label">Description</span>
            <input 
                className="input__field"
                type="text" 
                value={groupDescription} 
                placeholder="group description"
                onChange={(e) => setGroupDescription(e.target.value)}
                required
            />
        </section>
    )
}

export default GroupDetails
