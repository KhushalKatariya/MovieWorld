  import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Addmovie from './components/Addmovie/Addmovie'
import Viewmovie from './components/Viewmovie/Viewmovie'
import Nav from './components/Nav/Nav'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Updatemovie from './components/Updatemovie/Updatemovie'
  
  const App = () => {
    return (
      <div>
        <BrowserRouter>
        <ToastContainer />
        <Nav />
            <Routes>
              <Route path='/' element={<Viewmovie />}/>
              <Route path='/addmovie' element={<Addmovie/>} />
              <Route path='/viewmovie' element={<Viewmovie/>} />
              <Route path='/updatemovie/:id' element={<Updatemovie />} />
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default App