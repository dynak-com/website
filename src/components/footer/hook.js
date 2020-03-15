import { useState, useEffect, useCallback } from 'react';
import { onPrivacyPolicyModalOpen } from '../modals-container/callbacks';

const useComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const onPrivacyPolicyModalOpenDone = useCallback(
    () => onPrivacyPolicyModalOpen(),
    []
  );
  return {
    year,
    onPrivacyPolicyModalOpenDone
  };
};

export default useComponent;
