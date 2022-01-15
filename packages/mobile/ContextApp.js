import React from 'react';
import App from './App';
import {Provider as CountProvider} from '@monorepo-yarn/common';

const ContextApp = () => {
  return (
    <CountProvider>
      <App />
    </CountProvider>
  );
};

export default ContextApp;
