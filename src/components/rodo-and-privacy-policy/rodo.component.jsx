import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const RodoContent = ({ rodoContent }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.rodoContentContainer}>
            <h6 className="text-center">{t(rodoContent.header)}</h6>
            <p>
                {t(rodoContent.par1)}
                <a className={styles.rodoLink} href="https://www.dynak.com" alt="dynak.com">
                    {t(rodoContent.website)}
                </a>
                {t(rodoContent.par2)}
            </p>
            <span>{t(rodoContent.generalProvisions)}</span>
            <p>
                {t(rodoContent.text1)}
                <a className={styles.rodoLink} href="https://www.dynak.com" alt="dynak.com">
                    www.dynak.com
                </a>
                .
            </p>
            <p>{t(rodoContent.text2)}</p>
            <p>{t(rodoContent.text3)}</p>
            <p>{t(rodoContent.definitions)}</p>
            <span>{t(rodoContent.administrator)}</span>
            <p>{t(rodoContent.user)}</p>
            <span>{t(rodoContent.personalData)}</span>
            <p>
                {t(rodoContent.paragraph1)}
                <a
                    className={styles.rodoLink}
                    href="https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company"
                    alt="dynak.com na LinkedIn"
                >
                    LinkedIn
                </a>
                {t(rodoContent.paragraph2)}
            </p>
            <ol className="px-3">
                <li>{t(rodoContent.paragraph3)}</li>
                <li>{t(rodoContent.paragraph4)}</li>
                <li>{t(rodoContent.paragraph5)}</li>
                <li>{t(rodoContent.paragraph6)}</li>
                <li>{t(rodoContent.paragraph7)}</li>
                <li>
                    {t(rodoContent.paragraph8)}&nbsp;
                    <a className={styles.rodoLink} href="https://www.linkedin.com" alt="LinkedIn">
                        www.linkedin.com
                    </a>
                    ,{' '}
                    <a className={styles.rodoLink} href="https://www.github.com" alt="GitHub">
                        www.github.com
                    </a>
                    ,{' '}
                    <a className={styles.rodoLink} href="https://www.gitlab.com" alt="GitLab">
                        www.gitlab.com
                    </a>
                    {t(rodoContent.paragraph9)}
                </li>
                <li>{t(rodoContent.paragraph10)}</li>
                <li>{t(rodoContent.paragraph11)}</li>
                <li>{t(rodoContent.paragraph12)}</li>
            </ol>
            <p>{t(rodoContent.paragraph13)}</p>
            <p>{t(rodoContent.paragraph14)}</p>
            <p>{t(rodoContent.paragraph15)}</p>
            <p>{t(rodoContent.paragraph16)}</p>
            <p>
                {t(rodoContent.paragraph17)} &nbsp;
                <a
                    className={styles.rodoLink}
                    href="mailto:admin@dynak.com?Subject=support"
                    alt="Support dynak.com"
                    target="_top"
                >
                    admin@dynak.com
                </a>
                .{' '}
            </p>
            <p>{t(rodoContent.paragraph18)}</p>
            <p>{t(rodoContent.paragraph19)}</p>
            <p>{t(rodoContent.paragraph20)}</p>
            <p>{t(rodoContent.paragraph21)}</p>
            <p>{t(rodoContent.paragraph22)}</p>
            <p>{t(rodoContent.paragraph23)}</p>
            <span>{t(rodoContent.forms)}</span>
            <p>{t(rodoContent.paragraph24)}</p>
            <p>{t(rodoContent.paragraph25)}</p>
            <span>{t(rodoContent.technologies)}</span>
            <p>
                {t(rodoContent.Administrator)}
                <b>{t(rodoContent.not)}</b> {t(rodoContent.paragraph26)}
            </p>
            <span>{t(rodoContent.cookies)}</span>
            <p>
                {t(rodoContent.part1)}
                <b>{t(rodoContent.not)}</b> {t(rodoContent.part2)} <b>{t(rodoContent.not)}</b> {t(rodoContent.part3)}{' '}
                <b>{t(rodoContent.not)}</b> {t(rodoContent.part4)}
            </p>
            <span className="text-muted">{t(rodoContent.created)}</span>
        </div>
    );
};

export default RodoContent;
