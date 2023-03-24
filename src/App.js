
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DialogContainer from './components/Dialog/DialogContainer';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sitting from './components/Sitting/Sitting';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={<DialogContainer />} />
          <Route path='/profile/' element={<ProfileContainer />} />
          <Route path='/profile/:profileId' element={<ProfileContainer />} />
          <Route path='/users'
            element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/sitting' element={<Sitting />} /> 
          <Route path='/login' element={<Login />} />        
        </Routes>
      </div>
    </div>
  );
}



export default App;
