import React from 'react';
import renderer from 'react-test-renderer';
import ProjectsPage from './projects-page.component';
import content from '../../content.json';

describe('ProjectsPage component', () => {
    it('renders correctly according to Snapshot', () => {
        const [data] = content;
        const tree = renderer.create(<ProjectsPage content={data.projects} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
