import React, { useState} from 'react'
import { FormGroup, Input, Button, Row, Col } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const Registration = () => {

  const initialUser = { email: '', password: '', username: '' }
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }))
  }

  const signUp = async () => {
    const url = `http://localhost:1337/api/auth/local/register`
    try {
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          navigate('/login')
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      })
    }
  };

  return (
    <Row className='registration'>
      <Col sm='12' md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Sign up:</h2>
          <FormGroup>
            <Input
              id="email"
              name="username"
              placeholder="Enter your Full Name"
              type="email"
              value={user.username}
              onChange={handleUserChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={user.email}
              onChange={handleUserChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={user.password}
              onChange={handleUserChange}
            />
          </FormGroup>
          <Button color='primary' onClick={signUp}>
            Sign up
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default Registration