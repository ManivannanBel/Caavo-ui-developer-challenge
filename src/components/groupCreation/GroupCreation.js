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

    useEffect(() => {
        props.fetchUsers();
    }, [])

    useEffect(() => {
        if(props.users)
            setUsers(props.users);
    }, [props.users])

    return (
        <Container fixed>
            <main className="group__creation_wrapper">
                <GroupDetails 
                    groupName={groupName}
                    setGroupName={setGroupName} 
                    groupDescription={groupDescription}
                    setGroupDescription={setGroupDescription}
                    groupLogo={groupLogo}
                /> 
                <UsersList
                    users={users}
                />
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
