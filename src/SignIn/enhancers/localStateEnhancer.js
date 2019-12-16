import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const onTextChange = (fn1, fn2) => fn => event => { 
    fn(event.target.value);
    fn1(false);
    fn2(false);
};

const hoc = Component => {
    const LocalStateEnhancer = ({ signIn, invalidCombination }) => {
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [userNameError, setUserNameError] = useState(false);
        const [passwordError, setPasswordError] = useState(false);
        useEffect(() => {
            setUserNameError(invalidCombination);
            setPasswordError(invalidCombination);
        }, [invalidCombination]);
        const textChangeHandler = onTextChange(setUserNameError, setPasswordError);
        return <Component
            userName={userName}
            password={password}
            userNameError={userNameError}
            passwordError={passwordError}
            onUserNameChange={textChangeHandler(setUserName)}
            onPasswordChange={textChangeHandler(setPassword)}
            onSubmit={() => {
                let error = false;
                if (!userName.trim()) {
                    setUserNameError(true);
                    error = true;
                }
                if (!password.trim()) {
                    setPasswordError(true);
                    error = true;
                }
                if (!error) {
                    signIn(userName.trim(), password.trim());
                }
            }}
        />;
    };

    LocalStateEnhancer.propTypes = {
        signIn: PropTypes.func,
        userNameInvalid: PropTypes.bool,
        passwordInvalid: PropTypes.bool
    };

    return LocalStateEnhancer;
}

export default hoc;