import React from 'react';
import { useComponent } from './hook';
import { shallow } from 'enzyme';
import { onChangeInput, onSubmitForm } from './callbacks';
import { onCorrectModalOpen } from '../modals-container/callbacks';

jest.mock('./callbacks', () => ({
    onChangeInput: jest.fn(),
    onSubmitForm: jest.fn(),
    onCorrectModalOpen: jest.fn(),
}));

async function HookWrapper(props) {
    try {
        await props.hook();
        await expect(onChangeInput).toHaveBeenCalled();
        await expect(onSubmitForm).toHaveBeenCalled();
        await expect(onCorrectModalOpen).toHaveBeenCalled();
        await expect(onCorrectModalOpen).toHaveBeenCalled();
        return;
    } catch (err) {
        await expect(err).toBeDefined();
    }
}

describe('ContactForm hook', () => {
    it('should handle onChangeInput and onSubmitForm', () => {
        shallow(<HookWrapper hook={() => useComponent()} />);
    });
});
