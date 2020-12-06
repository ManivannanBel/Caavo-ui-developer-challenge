import React, {useState} from 'react';
import headerStyles from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <AppBar className={headerStyles.appBar}>
            <Toolbar>
                <Typography variant="h6">
                    Groups
                </Typography>
                <div style={{position : 'relative', marginLeft: 0, width: '100%',}}>
                    <Link to='/create-group'>
                        <Button style={{color : '#ffffff'}}>create group</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}


export default (Header)
