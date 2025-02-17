import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Routers} from 'react-router-dom';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routers>
      <App />
    </Routers>
  </Provider>
  // </React.StrictMode>
);
