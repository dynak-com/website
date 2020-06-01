import React from 'react';
import { TeamMember } from '../team-member';
import { useTranslation } from 'react-i18next';

const TeamArticle = ({ team }) => {
    const { title, teamData } = team;
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <article className="text-center">
                <h2>{t(title)}</h2>
                <div className="row">
                    {teamData.map((member) => (
                        <TeamMember member={member} key={member.name} />
                    ))}
                </div>
            </article>
        </React.Fragment>
    );
};

export default TeamArticle;
