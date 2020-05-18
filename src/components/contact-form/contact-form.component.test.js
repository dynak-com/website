import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ContactForm from './contact-form.component';
import content from '../../content.json';
import useComponent from './hook';

const [contentData] = content;
const { form } = contentData.contact;

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}

describe('ContactForm  component', () => {
    it('renders correctly according to Snapshot', () => {
        const tree = renderer.create(<ContactForm content={form} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ContactForm ', () => {
    it('should render', () => {
        const wrapper = shallow(<HookWrapper />);

        expect(wrapper.exists()).toBeTruthy();
    });

    it('should set init value', () => {
        const wrapper = shallow(<HookWrapper hook={() => useComponent()} />);

        const { hook } = wrapper.find('div').props();
        const { state, onChangeInputDone, onSubmitFormDone, onPrivacyPolicyModalOpenDone } = hook;
        expect(state).toEqual({
            email: '',
            isContactAgreed: false,
            isPrivacyPolicyAgreed: false,
            message: '',
            subject: '',
        });
        expect(onChangeInputDone).toMatchSnapshot();
        expect(onSubmitFormDone).toMatchSnapshot();
        expect(onPrivacyPolicyModalOpenDone).toMatchSnapshot();
    });

    describe('<ContactForm callbacks />', () => {
        let wrapper;
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation((init) => [init, setState]);

        beforeEach(() => {
            wrapper = shallow(<ContactForm content={form} />);
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('calls onChangeInputDone', () => {
            const mockedEvent = { target: {} };
            let i = 0;
            while (i < 6) {
                wrapper.find('input').at(i).simulate('change', mockedEvent);
                i++;
            }
            expect(setState).toHaveBeenCalledTimes(4);
        });
    });
});

it('sendData from contact form calls fetch', async () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const onError = jest.fn();

    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    let wrapper = shallow(<ContactForm content={form} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    await expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
});
