import { useState, useCallback } from 'react';
import { onChangeInput, onSubmitForm } from './callbacks';
import { onPrivacyPolicyModalOpen } from '../modals-container/callbacks';
import { useTranslation } from 'react-i18next';

const INITIAL_STATE = {
    subject: '',
    message: '',
    email: '',
    isContactAgreed: false,
    isPrivacyPolicyAgreed: false,
};

const useComponent = () => {
    const { t } = useTranslation();
    const [state, onSetState] = useState(INITIAL_STATE);
    const onChangeInputDone = useCallback((event) => onChangeInput(event, state, onSetState), [state]);
    const onSubmitFormDone = useCallback(
        (event) => {
            event.preventDefault();
            onSubmitForm(state, onSetState, INITIAL_STATE);
        },
        [state],
    );
    const onPrivacyPolicyModalOpenDone = useCallback(() => onPrivacyPolicyModalOpen(), []);
    return {
        t,
        state,
        onChangeInputDone,
        onSubmitFormDone,
        onPrivacyPolicyModalOpenDone,
    };
};

export default useComponent;
