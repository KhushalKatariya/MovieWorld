  import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Addmovie from './components/Addmovie/Addmovie'
import Viewmovie from './components/Viewmovie/Viewmovie'
import Nav from './components/Nav/Nav'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Updatemovie from './components/Updatemovie/Updatemovie'
import DownloadMovie from './components/Download/DownloadMovie'
  
  const App = () => {
    return (
      <div>
        <BrowserRouter>
        <ToastContainer />
        <Nav />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/addmovie' element={<Addmovie/>} />
              <Route path='/viewmovie' element={<Viewmovie/>} />
              <Route path='/updatemovie/:id' element={<Updatemovie />} />
              <Route path='/downloadmovie/:id' element={<DownloadMovie />} />
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default App