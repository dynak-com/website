import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  correctModalRef,
  invalidModalRef,
  modalPrivacyPolicyRef
} from './modals-container.component';

export function onCorrectModalOpen() {
  $(ReactDOM.findDOMNode(correctModalRef.current)).modal();
}

export function onInvalidModalOpen() {
  $(ReactDOM.findDOMNode(invalidModalRef.current)).modal();
}

export function onPrivacyPolicyModalOpen() {
  $(ReactDOM.findDOMNode(modalPrivacyPolicyRef.current)).modal();
}
