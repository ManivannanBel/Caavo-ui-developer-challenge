import React, {useState} from 'react'
import './UserCard.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function UserCard(props) {

    const {name, 
           Image, 
           id, 
           selectUser, 
           removeSelectedUser} = props;

    const [selected, setSelected] = useState(false);

    const toggleUserSelect = () => {
        if(!selected){
            selectUser(id);
        }else{
            removeSelectedUser(id);
        }
        setSelected(!selected);
    }

    return (
        <div className="user__card__wrapper" onClick={() => toggleUserSelect()}>
            {selected &&
                <CheckBoxIcon className="tick__icon"/>
            }
            <img src={Image}/>
            <div className="user__name">{name}</div>
        </div>
    )
}

export default UserCard
