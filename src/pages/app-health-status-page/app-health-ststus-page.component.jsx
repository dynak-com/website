import React from 'react';
import { StyledMessage } from './app-health-status-page.styles';
import useComponent from './hook.js';

const AppHealthStatusPage = () => {
  const { loading, status } = useComponent();
  if (loading) {
    return <StyledMessage>Checking...</StyledMessage>;
  }
  return <StyledMessage>{status}</StyledMessage>;
};

export default AppHealthStatusPage;
