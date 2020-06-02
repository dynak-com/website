import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorPage = (props) => {
    const { t } = useTranslation();
    return <h1 className="text-center text-light">{t(props.content)}</h1>;
};

export default ErrorPage;
