import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from './/about-page.component';
import content from '../../content.json';

describe('AboutPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [data] = content;
        const tree = renderer.create(<AboutPage content={data.about} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
