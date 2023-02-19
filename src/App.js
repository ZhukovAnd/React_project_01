
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sitting from './components/Sitting/Sitting';

import { upduteNewPostText } from './redux/state';
import { updateNewMessageText } from './redux/state';
const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={<Dialog
              dialogsData={props.state.dialogPage}
              addMessage={props.addMessage}
              updateNewMessageText={updateNewMessageText}
            />} />
          <Route path='/profile'
            element={<Profile
              myProfilePage={props.state.profilePage}
              addPost={props.addPost}
              upduteNewPostText={upduteNewPostText}
            />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/sitting' element={<Sitting />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
