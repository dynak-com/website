import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './card-list.component';
import content from '../../content.json';
import { onRenderCards } from './card-list.component';

describe('CardList component', () => {
    const [contentData] = content;
    it('should run onRenderCards function', () => {
        const myMockFn = jest.fn(onRenderCards(contentData.home.posts));
        expect(myMockFn).toMatchSnapshot();
    });

    it('renders correctly according to Snapshot', () => {
        const { posts } = contentData.home;
        const cardsData = {
            posts,
        };
        const tree = renderer.create(<CardList data={cardsData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
