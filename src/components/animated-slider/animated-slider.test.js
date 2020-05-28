import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AnimatedSlider from './animated-slider.component';

describe('AnimatedSlider component', () => {
    const component = shallow(<AnimatedSlider />);
    const wrapper = mount(<AnimatedSlider />);
    const animatedSlider = component.find('div');

    it('renders correctly according to Snapshot', () => {
        const tree = renderer.create(<AnimatedSlider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render 2 divs', () => {
        expect(component.find('div')).toHaveLength(2);
    });

    it('AnimatedSlider has 1 nested child', () => {
        expect(wrapper.children().length).toBe(1);
    });

    it('animatedSlider div has 1 child', () => {
        const imageContainer = animatedSlider.find('div');
        expect(imageContainer.children().length).toBe(1);
    });
});
