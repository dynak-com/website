import {
  onCorrectModalOpen,
  onInvalidModalOpen
} from '../modals-container/callbacks';

export function onChangeInput(event, state, onSetState) {
  const { name } = event.target;
  let value;
  switch (name) {
    case 'isContactAgreed':
    case 'isPrivacyPolicyAgreed':
      value = event.target.checked;
      break;
    default:
      value = event.target.value;
  }
  onSetState({ ...state, [name]: value });
}

export function onSubmitForm(state, onSetState, INITIAL_STATE) {
  const data = {
    ...state
  };
  fetch('/new_message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.status === 200) {
      onCorrectModalOpen();
      onSetState(INITIAL_STATE);
    } else {
      onInvalidModalOpen();
    }
  });
}
