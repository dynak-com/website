import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './modal.component';
import { correctModalRef, invalidModalRef } from '../modals-container/modals-container.component';
import content from '../../content.json';

describe('Modal component', () => {
    const [contentData] = content;
    const { modal } = contentData;

    it('renders correctModal component according to snapshot', () => {
        const tree = renderer.create(<Modal ref={correctModalRef} content={modal.modal_ok} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders Invalid Modal component according to snapshot', () => {
        const tree = renderer.create(<Modal ref={invalidModalRef} content={modal.modal_error} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
