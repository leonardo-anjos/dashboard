import React from 'react';
import { ProviderRedux } from './providers/Redux/Redux';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <ProviderRedux>
      <Dashboard />
    </ProviderRedux>
  );
}

export default App;
