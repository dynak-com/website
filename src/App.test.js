import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import useComponent from './hook';

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <HookWrapper hook={hook} />;
}

describe('App component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should set init value', () => {
        const wrapper = shallow(<HookWrapper hook={() => useComponent()} />);
        const hook = wrapper.props().hook;
        const { lang, onSetLang } = hook;
        expect(lang).toEqual('pl');
    });
});
