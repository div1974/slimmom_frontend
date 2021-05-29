import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { store, persistor } from './redux/store';
import './assets/styles/fonts.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import './assets/styles/index.css';
import App from './components/App';
import Favicon from 'react-favicon';
import FaviconIco from './assets/images/favicon.png';



ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
          <Favicon url={FaviconIco} />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
  