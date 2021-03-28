import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/store';
import Ochef from 'src/container/Ochef';


const target = document.getElementById('root');
const root = (
  <Provider store={store}>
  <BrowserRouter>
      <Ochef />
  </BrowserRouter>
  </Provider>
);
render(root, target);
