import Navbar from './navbar.component';
import content from '../../content.json';
import { onRenderNavLinks } from './navbar.component';

const contentData = JSON.parse(JSON.stringify(content));
const lang = 'pl';

describe('Navbar  component', () => {
    const content = contentData.find((item) => item.lang === lang);
    const targetId = 'headerNavbarMenu';

    it('should run onRenderCards function', () => {
        const myMockFn = jest.fn(onRenderNavLinks(content.nav, targetId));
        expect(myMockFn).toMatchSnapshot();
    });

    it('renders correctly according to Snapshot', () => {
        const prop = { content: content.nav, targetId };
        const myMockFn = jest.fn(Navbar(prop));
        expect(myMockFn).toMatchSnapshot();
    });
});
