import React from 'react'
import logo from '../logo.svg'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React logo"
        />
      </Navbar.Brand>
    </Navbar>
  )
}
