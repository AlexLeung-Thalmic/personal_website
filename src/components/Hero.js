import React from 'react';

import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';

const Hero = () => {

  return (
  
    <HeroWrapper>
      <div className="section-center hero-center">
        <div className="hero-info">
          <div className="text-top">
            <h1>alex leung</h1>
            <h3>A software engineer at North</h3>
          </div>
          <div className="text-bottom">
            <SocialLinks />
          </div>
        </div>
      </div>
    </HeroWrapper>   
  )
}

const HeroWrapper = styled.section`
/* margin-top: -5rem; */
/* padding-top: 5rem; */
height: calc(100vh - 80px);
background: var(--clr-white);
position: relative;

.hero-center{
  height: 100%;
  width: 80vw;
  display: grid;
  align-items: center;
}

.hero-info h1 {
  display:inline-block;
  font-weight: bold;
  font-family: var(--ff-primary);
  text-transform: uppercase;
  font-size: 4rem; 
  letter-spacing: 0.2rem; 
  line-height: 0.9;
}

.text-top{
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity:0;
  transform: translate(0, 100%);
}

.text-bottom{
  animation: showBottomText 1.3s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  opacity:0;
  transform: translate(0, -100%);
}

@keyframes showTopText {
  0% { 
    transform: translate3d(0, 100%, 0); opacity: 0 
  }
  100% { 
    transform: translate3d(0, 0, 0);
    opacity:1
   }
}
@keyframes showBottomText {
   0% { 
    transform: translate3d(0, -100%, 0);
    opacity: 0 
  }
  100% { 
    transform: translate3d(0, 0, 0);
    opacity:1
   }
}

.hero-info h3 {
  max-width: 30rem;
  font-weight: 400;
}

@media (min-width: 768px) {
  .hero-info h1 {
    font-size: 8rem;
    padding-bottom:1rem;
  }
  .social-links {
    width: 17rem;
    margin-top: 3rem;

  }
  .social-link {
    font-size: 3.5rem;
  }
}
`;

export default Hero
