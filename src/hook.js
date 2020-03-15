import { useState } from 'react';

const useComponent = () => {
  const [lang, onSetLang] = useState('pl');
  return {
    lang,
    onSetLang
  };
};

export default useComponent;
