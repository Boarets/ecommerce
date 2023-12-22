import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { userData } from '../../helpers';
import { FaShoppingBasket } from 'react-icons/fa'



const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { jwt } = userData();
  const isLoggedIn = !!jwt

  return (
    <div className='custom-nav'>

      <Navbar light color='light' expand='md'>
        <Container className='d-flex '>
          <NavbarBrand href="/">Strapi App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href='/basket'>
                  {FaShoppingBasket}
                </NavLink>
              </NavItem>
              {
                isLoggedIn ? (<NavLink href="/logout">Logout</NavLink>) : (<NavLink href="/login">Login</NavLink>)
              }
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNav