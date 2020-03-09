import { useEffect, useRef } from 'react';
import { onResize } from './callbacks';

const useComponent = () => {
  const navLinkRef = useRef();
  useEffect(() => {
    onResize(navLinkRef);
    window.addEventListener('resize', () => onResize(navLinkRef));
    return () =>
      window.removeEventListener('resize', () => onResize(navLinkRef));
  }, []);
  return {
    navLinkRef
  };
};

export default useComponent;
