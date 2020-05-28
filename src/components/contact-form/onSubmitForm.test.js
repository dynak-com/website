import { onSubmitForm } from './callbacks';
import { onInvalidModalOpen } from '../modals-container/callbacks';

jest.mock('../modals-container/callbacks', () => ({
  onInvalidModalOpen: jest.fn(),
}));

describe('ContactForm hook', () => {
  it('calls fetch post and sends data ', (done) => {
    const mockSuccessResponse = [{ status: 200 }];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const state = {
      email: 'some@email.com',
      isContactAgreed: true,
      isPrivacyPolicyAgreed: true,
      message: 'message',
      subject: 'subject',
    };
    const onSetState = jest.fn();
    const INITIAL_STATE = {};
    onSubmitForm(state, onSetState, INITIAL_STATE);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    process.nextTick(() => {
      global.fetch.mockClear();
      done();
    });
  });

  it('"calls onInvalidModalOpen when exception"', (done) => {
    const mockFailureResponse = [{ message: 'Fields are empty' }];
    const mockJsonPromise = Promise.reject(mockFailureResponse);
    const mockFetchPromise = Promise.reject({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const state = {
      email: null,
      isContactAgreed: false,
      isPrivacyPolicyAgreed: false,
      message: null,
      subject: null,
    };
    const onSetState = jest.fn();
    const INITIAL_STATE = {};

    onSubmitForm(state, onSetState, INITIAL_STATE);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(onInvalidModalOpen).toHaveBeenCalledTimes(1);

    process.nextTick(() => {
      global.fetch.mockClear();
      done();
    });
  });
});
