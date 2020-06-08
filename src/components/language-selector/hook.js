import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useComponent = (languages) => {
    const { i18n } = useTranslation();

    const onChangeToEng = useCallback(() => {
        i18n.changeLanguage(languages.en);
    }, [i18n, languages.en]);

    const onChangeToPl = useCallback(() => {
        i18n.changeLanguage(languages.pl);
    }, [i18n, languages.pl]);

    const localStorageLanguage = localStorage.getItem(languages.nextLang);
    return {
        localStorageLanguage,
        onChangeToEng,
        onChangeToPl,
    };
};

export default useComponent;
