import React, {useState , useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../../actions/userActions';
import {createGroup} from '../../actions/groupActions';
import GroupDetails from './GroupDetails';
import Container from '@material-ui/core/Container';
import UsersList from './UsersList';
import './GroupCreation.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from 'react-router-dom';

function GroupCreation(props) {

    const history = useHistory();

    const [users, setUsers] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupLogo, setGroupLogo] = useState(null);
    const [selectedUsers, setSelectedUsers] = useState(new Set());

    const [sortedOrder, setSortedOrder] = useState('ascending');

    useEffect(() => {
        props.fetchUsers();
    }, [])

    useEffect(() => {
        if(props.users)
            setUsers(props.users.sort(sortAscending()));
    }, [props.users])

    const handleGroupCreation = (event) => {
        event.preventDefault();

        if(groupName === '' || groupDescription === ''){
            alert('group name and group description are required');
            return;
        }

        const newGroup = {
            id : new Date().getTime(),
            name : groupName,
            description : groupDescription,
            users : Array.from(selectedUsers),
            logo : groupLogo
        }
        props.createGroup(newGroup);
        history.push('/');
    }

    const toggleSortOrder = (e) => {
        e.preventDefault();
        if(sortedOrder === 'ascending'){
            setSortedOrder('descending');
            users.sort(sortDescending());
            setUsers([...users]);
        }else{
            setSortedOrder('ascending');
            users.sort(sortAscending());
            setUsers([...users]);
        }
    }

    const sortAscending = () => {
        return (a, b) => {
            if(a.name < b.name)
                return -1;
            if(a.name > b.name)
                return 1;
            return 0;
        }
    }

    const sortDescending = () => {
        return (a, b) => {
            if(a.name < b.name)
                return 1;
            if(a.name > b.name)
                return -1;
            return 0;
        }
    }

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
                <form>
                    <div style={{width : "100%"}}><Link to="/"><CloseIcon className="cls_icon"/></Link></div>
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
                        toggleSortOrder={toggleSortOrder}
                    />
                    <div>
                        <button className="btn update__btn" onClick={handleGroupCreation}>Update</button>
                        <button className="btn remove__btn">Remove</button>
                    </div>
                </form>
            </main>
        </Container>
    )
}

GroupCreation.propTypes = {
    fetchUsers : PropTypes.func.isRequired,
    createGroup : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users : state.usersReducer.users
});

export default connect(mapStateToProps, {fetchUsers, createGroup}) (GroupCreation)
