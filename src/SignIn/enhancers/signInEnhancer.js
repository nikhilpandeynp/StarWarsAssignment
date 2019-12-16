import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { checkForValidUser } from '../../SWAPIHelper';

const hoc = Component => {
    const SignInEnhancer = ({ onSuccessfulSignIn }) => {
        const [invalidCombination, setInvalidCombination] = useState(false);
        const [listVisible, setListVisibility] = useState(false);
        return listVisible ? <Redirect to="/planets" /> : <Component
            invalidCombination={invalidCombination}
            signIn={(userName, password) => {
                checkForValidUser(userName, password).then(valid => {
                    if (valid) {
                        setListVisibility(true);
                        onSuccessfulSignIn(userName);
                    } else {
                        setInvalidCombination(true);
                    }
                });
            }}
        />;
    };

    SignInEnhancer.propTypes = {
        onSuccessfulSignIn: PropTypes.func
    };

    return SignInEnhancer;
}

export default hoc;