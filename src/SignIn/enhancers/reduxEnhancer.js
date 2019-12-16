import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { loginUser } from "../../redux/actions";

const hoc = Component => {
    const ReduxEnhancer = ({ user, loginUser }) => (
        user.loggedIn ? <Redirect to="/planets" /> : <Component
            onSuccessfulSignIn={loginUser}
        />
    )

    ReduxEnhancer.propTypes = {
        user: PropTypes.object
    };

    const mapStateToProps = ({ user }) => ({
        user
    });
    
    const mapDispatchToProps = dispatch => ({
        loginUser: name => dispatch(loginUser(name))
    });

    return connect(mapStateToProps, mapDispatchToProps)(ReduxEnhancer);
};

export default hoc;