import { useEffect, useRef } from 'react';
import { onResize } from './callbacks';
import { useTranslation } from 'react-i18next';

const useComponent = () => {
    const navLinkRef = useRef();
    const { t } = useTranslation();
    useEffect(() => {
        onResize(navLinkRef);
        window.addEventListener('resize', () => onResize(navLinkRef));
        return () => window.removeEventListener('resize', () => onResize(navLinkRef));
    });
    return {
        navLinkRef,
        t,
    };
};

export default useComponent;
