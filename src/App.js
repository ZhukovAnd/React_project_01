
import React from 'react';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sitting from './components/Sitting/Sitting';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav  />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' 
                  element={<Dialog dialogsData={props.state.dialogPage} />} />
            <Route path='/profile' 
                  element={<Profile mypostData={props.state.profilePage.mypostData} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/sitting' element={<Sitting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
