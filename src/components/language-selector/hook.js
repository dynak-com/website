import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '/callback';

export const useComponent = (flag, language) => {
    const { i18n } = useTranslation();
    useEffect(() => {
        window.addEventListener('languagechange', () => changeLanguage(language, i18n));
        return () => window.removeEventListener('languagechange', () => changeLanguage(language, i18n));
    }, [language, i18n]);
    return {
        language,
    };
};

export default useComponent;
