import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from './contact-form.component';
import content from '../../content.json';

describe('ContactForm  component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const { form } = contentData.contact;
        const tree = renderer.create(<ContactForm content={form} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
