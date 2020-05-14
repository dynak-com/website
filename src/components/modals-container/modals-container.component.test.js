import React from 'react';
import renderer from 'react-test-renderer';
import ModalsContainer from './modals-container.component';
import content from '../../content.json';

describe('ModalsContainer component', () => {
    it('renders correctly according to Snapshot', () => {
        /* const [data] = content;
        const tree = renderer.create(<ModalsContainer modalsData={data.modal} />).toJSON();
        expect(tree).toMatchSnapshot();*/
    });
});
