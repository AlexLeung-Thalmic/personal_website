import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Biograph = (props) => {
  const { title, image, info } = props.bio[0];

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })

  return (
    <div>
      <AboutWrapper className="about-page">
        <div className="section-center">
          <article className="about-title about-intro">
            {title}
          </article>
          <article className="about-center">
            <div>
              <Image fluid={image.childImageSharp.fluid} className="about-img"
                objectFit="cover"
                alt="photo of Alex" />
            </div>
            <div>
              <h2 className="about-title subtitle">Biograph</h2>
              <p data-aos="fade-left" className="about-info">{info}</p>
            </div>
          </article>
        </div>
      </AboutWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="hsl(210, 36%, 96%)" fillOpacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,74.7C274.3,75,343,85,411,74.7C480,64,549,32,617,42.7C685.7,53,754,107,823,133.3C891.4,160,960,160,1029,138.7C1097.1,117,1166,75,1234,53.3C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
  )
}

const AboutWrapper = styled.section`
padding:5rem 0;
  .about-img {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .about-info {
    text-align: left;
    line-height:1.8;
  }
  
  @media (min-width: 992px) {
    .about-center{
      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 4rem;
      align-items:center;
      padding-top: 2rem;
    }
    .about-title.about-intro {
      margin-bottom: 2rem;
    }
  }
`;

export default Biograph
