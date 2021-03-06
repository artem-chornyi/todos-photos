import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <ScrollToTop/>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
