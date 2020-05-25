import React from 'react';
import { Link } from 'gatsby';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <h1>Oops! This page doesn't exist.</h1>
        <Link to="/" className="blog-btn">
          <FaLongArrowAltLeft className="blog-icon" />
          <span>take me home</span>
        </Link>
      </ErrorWrapper>
    </Layout>
  )
}

const ErrorWrapper = styled.section`
  height: calc(100vh - 80px);
  padding-top: 5rem;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
`;
export default Error
