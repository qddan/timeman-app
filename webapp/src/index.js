import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Toaster } from 'react-hot-toast';

import { StyleReset } from 'atomize';

import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './client';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <ApolloProvider client={client}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <Toaster position="bottom-center" />
      <App />
    </StyletronProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
