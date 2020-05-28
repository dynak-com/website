import React from 'react';
import renderer from 'react-test-renderer';
import IconsBar from './icons-bar.component';

describe('IconsBar component', () => {
    it('renders correctly according to Snapshot', () => {
        const tree = renderer.create(<IconsBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
