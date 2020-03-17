import React from 'react';
import useComponent from './hook.js';

const AppHealthStatusPage = () => {
  const { loading, status } = useComponent();
  if (loading) {
    return <p>Checking...</p>;
  }
  return <p>{status}</p>;
};

export default AppHealthStatusPage;
