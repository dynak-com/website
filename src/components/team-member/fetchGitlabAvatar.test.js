import content from '../../content.json';
import { fetchGitlabAvatar } from './hook';

const [contentData] = content;
const { teamData } = contentData.about.team;

describe('FetchGitlabAvatar function ', () => {
    it('fetches data from server when server returns a successful response', (done) => {
        const mockSuccessResponse = [{ avatar_url: 'fetched' }];
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        teamData.map((member) => {
            const setAvatarUrl = jest.fn();
            const abortController = new AbortController();
            fetchGitlabAvatar(member.username, setAvatarUrl, abortController.signal);
        });
        expect(global.fetch).toHaveBeenCalledTimes(9);

        process.nextTick(() => {
            global.fetch.mockClear();
            done();
        });
    });

    it('"does not fetch the data"', (done) => {
        const mockFailureResponse = [{ avatar_url: 'not fetched' }];
        const mockJsonPromise = Promise.reject(mockFailureResponse);
        const mockFetchPromise = Promise.reject({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);

        teamData.map((member) => {
            const setAvatarUrl = jest.fn();
            const abortController = new AbortController();
            fetchGitlabAvatar(member.username, setAvatarUrl, abortController.signal);
        });
        expect(global.fetch).toHaveBeenCalledTimes(9);

        process.nextTick(() => {
            global.fetch.mockClear();
            done();
        });
    });
});
