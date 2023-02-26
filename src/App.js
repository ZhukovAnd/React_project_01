
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DialogContainer from './components/Dialog/DialogContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sitting from './components/Sitting/Sitting';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={<DialogContainer
              store={props.store}
            />} />
          <Route path='/profile'
            element={<Profile
              store={props.store}
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
