import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import store from './app/store'; 

import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const el = document.getElementById('app')
render(
  <Provider store={store}>
    <App
      initialPage={JSON.parse(el.dataset.page)}
      resolveComponent={name => require(`./view/${name}`).default}
    />
  </Provider>  
    ,
  document.getElementById('app')
)
