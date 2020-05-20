import React from 'react';
import renderer from 'react-test-renderer';
import { TeamMember } from './TeamMember';
import content from '../../content.json';

describe('TeamMember component', () => {
    const [contentData] = content;
    const { teamData } = contentData.about.team;
    it('renders correctly according to Snapshot', () => {
        teamData.map((member) => {
            const tree = renderer.create(<TeamMember member={member} />).toJSON();
            return expect(tree).toMatchSnapshot();
        });
    });
});
