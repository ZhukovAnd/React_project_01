import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import store from './redux/state';
import './index.css';
import App from './App';


let root = ReactDOM.createRoot(document.getElementById('root'));

let myRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} 
                    addPost={store.addPost.bind(store)} 
                    addMessage={store.addMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                    upduteNewPostText={store.upduteNewPostText.bind(store)}
                     />
            </React.StrictMode>
        </BrowserRouter>)
}

myRender(store.getState())

store.subscrabe(myRender)

reportWebVitals();
