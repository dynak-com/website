import React from 'react';
import renderer from 'react-test-renderer';
import ValuesArticle from './values-article.component';
import content from '../../content.json';

describe('RodoContent component', () => {
    it('renders correctly according to Snapshot', () => {
        const [data] = content;
        const tree = renderer.create(<ValuesArticle values={data.about.values} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
