// @ts-nocheck
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Container } from 'reactstrap'
import Login from './components/Login'
import Logout from './components/Logout'
import Registration from './components/Registration'
import ProductView from './components/ProductView'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Protector } from './helpers'
import CustomNav from './components/CustomNav'


const App = () => {
  return (    
    <Container>
      <CustomNav/>
      <Router>
        <Routes>
          <Route path='/' element={<Protector Component={Home}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/product-details' element={<ProductView />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Container>
  )
}

export default App
