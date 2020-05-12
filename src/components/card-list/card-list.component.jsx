import React from 'react';
import Card from '../card/card.component';
import styles from './styles.module.css';

const CardList = (props) => {
    const { posts } = props.data;
    return <div className="px-4">{onRenderCards(posts)}</div>;
};

export function onRenderCards(posts) {
    const cards = posts.map((data, index) => {
        const { id, text, headerText } = data;
        const isEven = index % 2 !== 0;
        return (
            <div key={id} className="row my-4">
                <div className={`col-12 col-md ${isEven ? 'order-md-1' : 'order-md-2'} ${styles.cardHeader}`}>
                    <h2>{headerText}</h2>
                </div>
                <div className={`col-12 col-md-7 ${isEven ? 'order-md-2' : 'order-md-1'} ${styles.cardWrapper}`}>
                    <Card textContent={text} className={isEven && styles.cardEven} />
                </div>
            </div>
        );
    });
    return cards;
}

export default CardList;
