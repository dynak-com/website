import React from 'react';
import { shallow } from 'enzyme';
import useComponent from './hook';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <HookWrapper hook={hook} />;
}

describe('', () => {
    it('should set init language value', () => {
        const wrapper = shallow(<HookWrapper hook={() => useComponent()} />);
        const hook = wrapper.props().hook;
        const { lang } = hook;
        expect(lang).toEqual('pl');
    });
});
