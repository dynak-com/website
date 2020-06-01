import React from 'react';
import { useTranslation } from 'react-i18next';

const TechnologiesArticle = ({ technologies }) => {
    const { title, content } = technologies;
    const { t } = useTranslation();
    return (
        <article>
            <h2 className="text-center text-sm-left">{t(title)}</h2>
            <p>{t(content)}</p>
        </article>
    );
};

export default TechnologiesArticle;
