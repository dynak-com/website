import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './card-list.component';
import content from '../../content.json';
import { onRenderCards } from './card-list.component';

describe('CardList component', () => {
    test('should run onRenderCards function', () => {
        const [data] = content;
        const myMockFn = jest.fn(onRenderCards(data.home.posts));
        expect(myMockFn).toMatchSnapshot();
    });

    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const { posts } = contentData.home;
        const cardsData = {
            posts,
        };
        const tree = renderer.create(<CardList data={cardsData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
