import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from './/about-page.component';
import content from '../../content.json';

describe('AboutPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<AboutPage content={contentData.about} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
