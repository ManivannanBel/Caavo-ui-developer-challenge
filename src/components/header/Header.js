import React, {useState} from 'react';
import headerStyles from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { searchBeers } from '../../actions/header';

function Header(props) {

    const [searchBy, setSearchBy] = useState("Search by name");
    const [searchString, setSearchString] = useState("");

    const onSearchHandle = () => {
        props.searchBeers(searchString, searchBy)
    }

    const onClearSearch = (e) => {
        setSearchString("")
        props.searchBeers("", searchBy);
    }

    return (
        <AppBar className={headerStyles.appBar}>
            <Toolbar>
                <Typography variant="h6">
                    Beercraft
                </Typography>
                {/* <Select
                style={{marginLeft : '20px', color : '#ffffff', textDecoration : 'none'}}
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                >
                    <MenuItem value={'Search by name'}>name</MenuItem>
                    <MenuItem value={'Search by style'}>style</MenuItem>
                    <MenuItem value={'Search by id'}>id</MenuItem>
                    <MenuItem value={'Search by ounces'}>ounces</MenuItem>
                    <MenuItem value={'Search by ibu'}>ibu</MenuItem>
                    <MenuItem value={'Search by abv'}>abv</MenuItem>
                </Select> */}
                <div className={headerStyles.search}>
                    <div className={headerStyles.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    className={headerStyles.searchInput}
                    placeholder={`${searchBy}`}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    />
                </div>
                <Button onClick={onSearchHandle} style={{color : '#ffffff'}}>Search</Button>
                <Button onClick={onClearSearch} style={{width : '160px', color : '#ffffff'}}>Clear search</Button>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    searchBeers : PropTypes.func.isRequired
}

export default connect(null, {searchBeers}) (Header)
