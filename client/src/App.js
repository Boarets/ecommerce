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
import Basket from './components/basket'


const App = () => {
  return (
    <>
      <CustomNav />
      <Container>
        <Router>
          <Routes>
            <Route path='/' element={<Protector Component={Home} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/product-details/:id' element={<ProductView />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/basket' element={<Basket />} />
          </Routes>
          <ToastContainer />
        </Router>
      </Container>
    </>

  )
}

export default App
