import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider, provider} from 'mobx-react';

ReactDOM.render(
 <Provider todoStore = {}>
   <App />
 </Provider>
 
  document.getElementById('root')
);

reportWebVitals();
