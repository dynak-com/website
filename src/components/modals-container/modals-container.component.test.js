import React from 'react';
import { shallow } from 'enzyme';
import { ModalsContainer } from './modals-container.component';
import content from '../../content.json';

jest.mock('./modals-container.component', () => ({
    ModalsContainer: jest.fn(),
}));

describe('ModalsContainer component', () => {
    const [contentData] = content;
    const { modal } = contentData;

    it('renders correctly according to Snapshot', () => {
        shallow(<ModalsContainer modalsData={modal} />);
        expect(ModalsContainer).toHaveBeenCalledTimes(1);
    });
});
