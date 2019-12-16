import React from 'react';
import { PlanetSearch } from './index';
import renderer from 'react-test-renderer';

test('SignIn component', () => {
    const component = renderer.create(
        <PlanetSearch 
            name=''
        />,
    );

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
});