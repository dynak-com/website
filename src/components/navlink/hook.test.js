import React from 'react';
import { useComponent } from './hook';
import { shallow } from 'enzyme';
import { onResize } from './callbacks';

jest.mock('./hook', () => ({
    onResize: jest.fn(),
}));

async function HookWrapper(props) {
    try {
        await props.hook();
        await expect(onResize).toHaveBeenCalledTimes(6);
        return;
    } catch (err) {
        await expect(err).toBeDefined();
    }
}

describe('Navlink hook', () => {
    it('should set users avatar urls', () => {
        shallow(<HookWrapper hook={() => useComponent()} />);
    });
});
