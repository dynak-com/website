import React from 'react';
import renderer from 'react-test-renderer';
import { TeamMember } from './TeamMember';
import { useComponent } from './hook';
import { shallow } from 'enzyme';
import content from '../../content.json';
import { mockFunction } from './dependancy.mock';

const [contentData] = content;
/*
async function HookWrapper(props) {
    await props.hook();
    await expect(mockFunction).toHaveBeenCalled();
    return;
}*/

describe('TeamMember component', () => {
    const { teamData } = contentData.about.team;
    it('renders correctly according to Snapshot', () => {
        teamData.map((member) => {
            const tree = renderer.create(<TeamMember member={member} />).toJSON();
            return expect(tree).toMatchSnapshot();
        });
    });
});
/*
describe('TeamMember hook', () => {
    const { teamData } = contentData.about.team;
    it('should set users avatar urls', () => {
        teamData.map((member) => {
            const wrapper = shallow(<HookWrapper hook={() => useComponent(member.username)} />);
            const hook = wrapper.props().hook;
        });
    });
});*/
