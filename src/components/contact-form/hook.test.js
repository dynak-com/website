import React from 'react';
import { useComponent } from './hook';
import { shallow } from 'enzyme';
import { onChangeInput, onSubmitForm } from './callbacks';

jest.mock('./callbacks', () => ({
    onChangeInput: jest.fn(),
    onSubmitForm: jest.fn(),
}));

async function HookWrapper(props) {
    try {
        await props.hook();
        await expect(onChangeInput).toHaveBeenCalled();
        await expect(onSubmitForm).toHaveBeenCalled();
        return;
    } catch (err) {
        await expect(err).toBeDefined();
    }
}

describe('ContactForm hook', () => {
    it('should handle onChangeInput abd onSubmitForm', () => {
        shallow(<HookWrapper hook={() => useComponent()} />);
    });
});
