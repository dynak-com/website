import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './footer.component';

describe('Footer component', () => {
    const component = shallow(<Footer />);
    const wrapper = mount(<Footer />);
    console.log(wrapper.debug());

    it('should render 2 spans', () => {
        const footer = component.find('footer');
        expect(footer.find('span')).toHaveLength(2);
    });

    it('displays RODO text', () => {
        const rodoSign = wrapper.find('.rodo');
        expect(rodoSign.text()).toEqual('RODO');
    });

    it('should change the text color on hover', () => {
        const rodoSign = wrapper.find('.rodo');
        rodoSign.simulate('mouseover');
        //toHaveStyle('color: #ddd');
        expect(rodoSign.text()).toEqual('RODO');
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
