import React from 'react';
import renderer from 'react-test-renderer';
import ProjectsPage from './projects-page.component';
import content from '../../content.json';

describe('ProjectsPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<ProjectsPage content={contentData.projects} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
