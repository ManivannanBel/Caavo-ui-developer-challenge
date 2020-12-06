import React, { useEffect, useState } from 'react'
import mainStyles from './Main.module.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GroupCreation from '../groupCreation/GroupCreation';
function Main(props) {
    return (
        <main className={mainStyles.wrapper}>
            <GroupCreation/>
        </main>
    )
}

Main.propTypes = {

}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {}) (Main)
