export const mockFunction = jest.fn();

jest.mock('./hook.js', () => ({ fetchGitlabAvatar: mockFunction }));
