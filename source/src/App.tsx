import React from 'react';
import { GlobalStyle } from './style.js';

import Music from './music/index';

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Music />
    </div>
  );
}

export default App;
