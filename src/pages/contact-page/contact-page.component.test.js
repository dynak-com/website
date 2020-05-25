import React from 'react';
import renderer from 'react-test-renderer';
import ContactPage from './contact-page.component';
import content from '../../content.json';

describe('ContactPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<ContactPage content={contentData.contact} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
