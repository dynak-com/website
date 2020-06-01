import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const ValuesArticle = ({ values }) => {
    const { title, content } = values;
    const { t } = useTranslation();
    return (
        <article className="mb-3">
            <h2 className="text-center">{t(title)}</h2>
            {renderValuesParagraph(content, t)}
        </article>
    );
};

function renderValuesParagraph(valuesData, t) {
    return valuesData.map((paragraph, index) => (
        <span className={`${styles.valueArticle} d-block my-2 text-justify`} key={`values-paragraph-${index}`}>
            {t(paragraph)}
        </span>
    ));
}

export default ValuesArticle;
