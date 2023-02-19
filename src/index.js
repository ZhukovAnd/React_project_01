import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import state from './redux/state';
import './index.css';
import App from './App';
import { addPost, addMessage, subscrabe } from './redux/state';


let root = ReactDOM.createRoot(document.getElementById('root'));

let myRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} addMessage={addMessage} />
            </React.StrictMode>
        </BrowserRouter>)
}

myRender(state)

subscrabe(myRender)

reportWebVitals();
