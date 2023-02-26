import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import store from './redux/reduxStore';
import './index.css';
import App from './App';
import { Provider } from './redux/StoreContext';

let root = ReactDOM.createRoot(document.getElementById('root'));

let myRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>)
}

myRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    myRender(state)
})

reportWebVitals();
