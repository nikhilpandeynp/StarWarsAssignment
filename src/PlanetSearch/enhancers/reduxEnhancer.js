import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

const hoc = Component => {
    const ReduxEnhancer = ({ user }) => (
        !user.loggedIn ? <Redirect to="/" /> : <Component name={user.name} />
    )

    ReduxEnhancer.propTypes = {
        user: PropTypes.object
    };

    const mapStateToProps = ({ user }) => ({
        user
    });

    return connect(mapStateToProps)(ReduxEnhancer);
};

export default hoc;