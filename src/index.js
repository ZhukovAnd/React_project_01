import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import store from './redux/reduxStore';
import './index.css';
import App from './App';


let root = ReactDOM.createRoot(document.getElementById('root'));

let myRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store} />
            </React.StrictMode>
        </BrowserRouter>)
}

myRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    myRender(state)
})

reportWebVitals();
