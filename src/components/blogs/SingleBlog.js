import React from 'react';
import { Link } from 'gatsby';
import { BsDot } from 'react-icons/bs';
import Image from 'gatsby-image';
import styled from 'styled-components';

const SingleBlog = ({ title, id, image, date, category, slug }) => {
  return (
    <BlogWrapper>
      <Link to={`/blogs/${slug}`} key={id} className="blog">
        <article>
          <Image fluid={image.childImageSharp.fluid} className="blog-img" alt="blog" />
          <div className="blog-card">
            <div className="blog-header">
              <p className="blog-cat">{category}</p>
              <BsDot />
              <p>{date}</p>
            </div>
            <div className="blog-text">
              <h4>{title}</h4>
            </div>
          </div>
        </article>
      </Link>
    </BlogWrapper>
  )
}

const BlogWrapper = styled.section`
  .blog{
    height: 100%;
    display: grid;
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); */
    transition: var(--transition);
    margin-bottom: 2rem;
    text-align: center; 
  }

  .blog:hover h4{
    color: rgba(233,33,99,1)
  }

  .blog article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .blog-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    color: black;
    padding: 1.5rem 1rem;
  }

  .blog-img{
    height: 20rem;
  }

  .blog-header {
    display:flex;
    align-items: center;
    justify-content: center;
    color: grey;
    font-size: 0.7rem;
    margin-bottom: 0.7rem;
  }
  .blog h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
     transition: var(--transition);
  }
  .blog-cat {
    text-transform: uppercase
  }
  @media (min-width: 576px) {
    .blog-card{
      padding-bottom: 0;
    } 
  }
`;

export default SingleBlog
