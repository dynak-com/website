import React from 'react';
import renderer from 'react-test-renderer';
import TechnologiesArticle from './technologies-article.component';
import content from '../../content.json';

describe('TechnologiesArticle component', () => {
    it('renders correctly according to Snapshot', () => {
        const [data] = content;
        const tree = renderer.create(<TechnologiesArticle technologies={data.about.technologies} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
