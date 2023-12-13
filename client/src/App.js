// @ts-nocheck
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Container } from 'reactstrap'
import Login from './components/Login'
import Logout from './components/Logout'
import Registration from './components/Registration'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Protector } from './helpers'


const App = () => {
  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path='/' element={<Protector Component={Home}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Container>
  )
}

export default App
