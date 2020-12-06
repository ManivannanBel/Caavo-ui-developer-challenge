import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Landing = (props) => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        setGroups(Object.values(props.groups));
    },[props.groups])

    return (
        <div>
            <Header/>
            <List style={{marginTop : '70px', background : "white", padding : '5px 20px 5px 20px'}} component="nav">
                {groups.map(group =>
                    <> 
                    <ListItem style={{marginBottom : '10px', display:'unset'}} button>
                        <img style={{left : 0, height: '50px', width : '50px'}} src={URL.createObjectURL(group.logo)} />
                        <div>
                        {`group name : ${group.name}`}
                        </div>
                        <div>
                        {`group description : ${group.description}`}                        </div>
                    </ListItem>
                    <Divider/>
                    </>
                )}
            </List>
        </div>
    )
}

Landing.propTypes = {
    groups : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    groups : state.groupReducer.groups
});

export default connect(mapStateToProps, {}) (Landing)
