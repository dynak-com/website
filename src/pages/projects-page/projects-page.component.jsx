import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import CardList from '../../components/card-list/card-list.component';

const ProjectsPage = (props) => {
    const { header, posts } = props.content;
    const cardsData = {
        posts,
    };
    const { t } = useTranslation();
    return (
        <section className={styles.projectsPageContainer}>
            <h1 className="text-center">{t(header)}</h1>
            <CardList data={cardsData} />
        </section>
    );
};

export default ProjectsPage;
