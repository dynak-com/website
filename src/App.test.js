import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Switch, Route } from 'react-router';
import Navbar from './components/navbar/navbar.component';

describe('App component', () => {
    it('renders correctly and contains the correct items', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find(Navbar).length).toBe(1);
        expect(wrapper.find(Switch).length).toBe(1);
        expect(wrapper.find(Route).length).toBe(5);

        expect(wrapper.debug()).toMatchSnapshot();
    });
});
