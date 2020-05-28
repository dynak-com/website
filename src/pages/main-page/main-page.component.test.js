import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.component';
import content from '../../content.json';

describe('MainPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<MainPage content={contentData.home} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
