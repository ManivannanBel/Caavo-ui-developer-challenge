import React, {useState , useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../../actions/userActions';
import GroupDetails from './GroupDetails';
import Container from '@material-ui/core/Container';
import UsersList from './UsersList';
import './GroupCreation.css';

function GroupCreation(props) {

    const [users, setUsers] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupLogo, setGroupLogo] = useState(null);
    const [selectedUsers, setSelectedUsers] = useState(new Set());

    useEffect(() => {
        props.fetchUsers();
    }, [])

    useEffect(() => {
        if(props.users)
            setUsers(props.users);
    }, [props.users])

    const selectUser = (userId) => {
        selectedUsers.add(userId);
        setSelectedUsers(new Set(selectedUsers));
    }

    const removeSelectedUser = (userId) => {
        selectedUsers.delete(userId);
        setSelectedUsers(new Set(selectedUsers));
    }

    return (
        <Container fixed>
            <main className="group__creation_wrapper">
                <h3 className="create_group_header">Create group</h3>
                <GroupDetails 
                    groupName={groupName}
                    setGroupName={setGroupName} 
                    groupDescription={groupDescription}
                    setGroupDescription={setGroupDescription}
                    groupLogo={groupLogo}
                    setGroupLogo={setGroupLogo}
                /> 
                <UsersList
                    users={users}
                    selectUser={selectUser}
                    removeSelectedUser={removeSelectedUser}
                />
                <div>
                    <button className="btn update__btn">Update</button>
                    <button className="btn remove__btn">Remove</button>
                </div>
            </main>
        </Container>
    )
}

GroupCreation.propTypes = {
    fetchUsers : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users : state.usersReducer.users
});

export default connect(mapStateToProps, {fetchUsers}) (GroupCreation)
