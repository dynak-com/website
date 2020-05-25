import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from './error-page.component';
import content from '../../content.json';

describe('ErrorPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<ErrorPage content={contentData.error} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
