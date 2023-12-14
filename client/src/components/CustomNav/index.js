import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { userData } from '../../helpers';



const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {jwt} = userData();
  const isLoggedIn = !!jwt

  return (
    <div className='custom-nav'>
      <Navbar light color='light' expand='md'>
        <NavbarBrand href="/">Strapi App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {
              isLoggedIn ? (<NavLink href="/logout">Logout</NavLink>) : (<NavLink href="/login">Login</NavLink>)
            }
            <NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNav