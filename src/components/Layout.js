import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} />
      <Sidebar toggleNavbar={toggleNavbar} isOpen={isOpen} />
      {children}
    </>
  )
}

export default Layout
