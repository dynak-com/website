import Navbar from './navbar.component';
import { onRenderNavLinks } from './navbar.component';
import content from '../../content.json';

describe('Navbar  component', () => {
    const [contentData] = content;
    const targetId = 'headerNavbarMenu';

    it('should run onRenderCards function', () => {
        const myMockFn = jest.fn(onRenderNavLinks(contentData.nav, targetId));
        expect(myMockFn).toMatchSnapshot();
    });

    it('renders correctly according to Snapshot', () => {
        const prop = { content: contentData.nav, targetId };
        const myMockFn = jest.fn(Navbar(prop));
        expect(myMockFn).toMatchSnapshot();
    });
});
