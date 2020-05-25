import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './footer.component';
import useComponent from './hook';

describe('Footer component', () => {
    const component = shallow(<Footer />);
    const wrapper = mount(<Footer />);

    it('should render 2 spans', () => {
        const footer = component.find('footer');
        expect(footer.find('span')).toHaveLength(2);
    });

    it('displays RODO text', () => {
        const rodoSign = wrapper.find('.rodo');
        expect(rodoSign.text()).toEqual('RODO');
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <HookWrapper hook={hook} />;
}

describe('Footer hook', () => {
    const component = shallow(<Footer />);
    it('renders correctly', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('should set init value', () => {
        const wrapper = shallow(<HookWrapper hook={() => useComponent()} />);

        const hook = wrapper.props().hook;
        const currentYear = new Date().getFullYear();

        const { year } = hook;
        expect(year).toEqual(currentYear);

        const property = component.find('span').at(1).prop('onClick');
        expect(typeof property === 'function' ? true : false).toBeTruthy();
    });
});
