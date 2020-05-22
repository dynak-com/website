import React from 'react';
import renderer from 'react-test-renderer';
import ModalForPrivacyPolicy from './modal-privacy-policy.component';
import { modalPrivacyPolicyRef } from '../modals-container/modals-container.component';
import content from '../../content.json';

describe('ModalForPrivacyPolicy component', () => {
    const [contentData] = content;
    const { modal } = contentData;

    it('renders correctModal component according to snapshot', () => {
        const tree = renderer
            .create(<ModalForPrivacyPolicy ref={modalPrivacyPolicyRef} content={modal.modal_privacy_policy} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
