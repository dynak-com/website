import content from '../../content.json';
import { fetchGitlabAvatar } from './hook';

const [contentData] = content;
const { teamData } = contentData.about.team;

describe('FetchGitlabAvatar function ', () => {
    it('fetches data from server when server returns a successful response', (done) => {
        // 1
        const mockSuccessResponse = [{ avatar_url: 'fetched' }];
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({
            // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
        teamData.map((member) => {
            const setAvatarUrl = jest.fn();
            const abortController = new AbortController();
            fetchGitlabAvatar(member.username, setAvatarUrl, abortController.signal);
        });
        expect(global.fetch).toHaveBeenCalledTimes(9);

        process.nextTick(() => {
            // 6
            global.fetch.mockClear(); // 7
            done(); // 8
        });
    });
});
