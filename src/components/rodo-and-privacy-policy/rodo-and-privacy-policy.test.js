import React from 'react';
import renderer from 'react-test-renderer';
import RodoContent from './rodo.component';

describe('RodoContent component', () => {
    it('renders correctly according to Snapshot', () => {
        const tree = renderer.create(<RodoContent />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
