import React from 'react';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './AllRoutes';
import Header from './components/Header';
import store from './store';

import './index.css';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Header />
        <Routes />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
