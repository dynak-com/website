import { useState, useEffect } from 'react';
import onSendCheckStatusRequest from './callback';

const useComponent = () => {
  const [state, onSetState] = useState({
    loading: true,
    status: 'Not OK'
  });
  useEffect(() => {
    onSendCheckStatusRequest(onSetState);
  }, []);
  return {
    ...state
  };
};

export default useComponent;
