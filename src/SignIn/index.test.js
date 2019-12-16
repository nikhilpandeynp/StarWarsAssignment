import React from 'react';
import { SignIn } from './index';
import renderer from 'react-test-renderer';

test('SignIn component', () => {
    const component = renderer.create(
        <SignIn 
            userName=''
            onUserNameChange={() => {}}
            userNameError={false}
            password=''
            onPasswordChange={() => {}}
            passwordError={false}
        />,
    );

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
});