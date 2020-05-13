import React from 'react';
import renderer from 'react-test-renderer';
import TeamArticle from './team-article.component';
import content from '../../content.json';

describe('TeamArticle component', () => {
    it('renders correctly according to Snapshot', () => {
        const [data] = content;
        const { team } = data.about;
        const tree = renderer.create(<TeamArticle team={team} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
