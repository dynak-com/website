import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.component';
import content from '../../content.json';
import styles from '../card-list/styles.module.css';

describe('CardList component', () => {
    it('renders correctly according to Snapshot', () => {
        const [contentData] = content;
        const { posts } = contentData.home;
        posts.map((data, index) => {
            const { text } = data;
            const isEven = index % 2 !== 0;
            const tree = renderer.create(<Card textContent={text} className={isEven && styles.cardEven} />).toJSON();
            return expect(tree).toMatchSnapshot();
        });
    });
});
