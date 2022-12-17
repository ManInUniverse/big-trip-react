import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchDestinationsAction, fetchOffersByTypeAction, fetchPointsAction } from './store/api-actions';

store.dispatch(fetchDestinationsAction());
store.dispatch(fetchOffersByTypeAction());
store.dispatch(fetchPointsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
