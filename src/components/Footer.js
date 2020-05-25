import React from 'react'
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';

const Footer = ({ color }) => {
  return (
    <FooterWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ background: `${color}` }}><path fill="#2f3640" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,101.3C672,128,768,160,864,160C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="footer-content">
        <h3>You've reached the bottom of the page.</h3>
        <SocialLinks footer styleClass="footer-icons" />
        <p>Copyright &copy; {new Date().getFullYear()} Alex Leung</p>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  .footer-content{
    background: var(--clr-black);
    text-align: center;
    color: white;
    outline: none;
    margin-top: -1rem;
    padding-top:1rem;
  }
  h3{
    width: 65vw;
    margin: 0 auto;
  }
  p {
    font-size:0.9rem;
    padding-bottom: 2rem;
  }
  svg{
    display: block;
  }
  .footer-icons {
    padding-bottom: 5rem;
    width: 15rem;
    margin: 3rem auto 0;
  }
  .footer-icons a {
    color: white;
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    .footer-icons {
      width: 20rem;
    }
    
    .footer-icons a {
      color: white;
      font-size: 3rem;
    }
  }
`;

export default Footer
