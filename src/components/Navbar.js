import React from 'react';
import { Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import NavLinks from '../constants/links';

const Navbar = ({ toggleNavbar }) => {

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h4 className="logo">Alex Leung</h4>
          </Link>
          <button
            type="button"
            className="toggle-btn"
            onClick={toggleNavbar}>
            <FiMenu />
          </button>
        </div>
        <NavLinks styleClass="nav-links" />
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  background: var(--clr-white);
  height: 5rem;
  display:flex;
  align-items: center;
  z-index:100;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-header {
    display:flex;
    justify-content:space-between;
    align-items: center;
  }
  
  .nav-header img {
    margin-bottom: 0.375rem;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color:transparent;
    color: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 0.5rem;
    :focus{
      outline: none;
    }
  }

  .toggle-btn:hover {
    color: var(--clr-hover);
  }

  .logo{
    /* font-family: 'Parisienne', cursive;     */
    font-family: 'Rock Salt', cursive;
    color: var(--clr-black);
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;
export default Navbar;


