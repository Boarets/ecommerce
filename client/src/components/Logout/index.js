import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user' , "");
    navigate('/login')
    toast.success('Logout success')
  },[])

  return null
}

export default Logout