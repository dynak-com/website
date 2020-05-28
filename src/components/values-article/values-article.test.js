import React from 'react';
import renderer from 'react-test-renderer';
import ValuesArticle from './values-article.component';
import content from '../../content.json';

describe('ValuesArticle component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const tree = renderer.create(<ValuesArticle values={contentData.about.values} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
