import React from 'react';
import { useComponent } from './hook';
import { shallow } from 'enzyme';
import content from '../../content.json';
import { fetchGitlabAvatar } from './hook';

jest.mock('./hook', () => ({
    fetchGitlabAvatar: jest.fn(),
}));

async function HookWrapper(props) {
    try {
        await props.hook();
        await expect(fetchGitlabAvatar).toHaveBeenCalledTimes(6);
        return;
    } catch (err) {
        await expect(err).toBeDefined();
    }
}

describe('TeamMember hook', () => {
    const [contentData] = content;
    const { teamData } = contentData.about.team;
    it('should set users avatar urls', () => {
        teamData.map((member) => {
            return shallow(<HookWrapper hook={() => useComponent(member.username)} />);
        });
    });
});
