import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/store'
import App from './app/App'

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.hydrate((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));