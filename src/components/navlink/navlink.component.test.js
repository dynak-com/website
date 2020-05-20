import React from 'react';
import { shallow } from 'enzyme';
import { CustomNavLink } from './navlink.component';
import content from '../../content.json';

describe('CustomNavLink component', () => {
    const [contentData] = content;
    const { nav } = contentData;

    it('renders correctly according to Snapshot', () => {
        nav.map((item) => {
            const { text, address } = item;
            const target = 'headerNavbarMenu';
            const wrapper = shallow(<CustomNavLink text={text} address={address} target={target} />);
            return expect(wrapper.exists()).toBeTruthy();
        });
    });
});
