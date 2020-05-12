import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './navbar.component';
import content from '../../content.json';
import useComponent from '../../hook';

const contentData = JSON.parse(JSON.stringify(content));

describe('ContactForm  component', () => {
    it('renders correctly according to Snapshot', () => {
        const { lang } = useComponent();
        const content = contentData.find((item) => item.lang === lang);

        const tree = renderer.create(<Navbar content={content.nav} targetId="headerNavbarMenu" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
