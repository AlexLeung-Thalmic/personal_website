import React from 'react';
import { graphql } from 'gatsby';
import ScrollUpButton from 'react-scroll-up-button';
import Layout from "../components/Layout";
import Blogs from '../components/blogs/Blogs';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const query = graphql`
  {
    blog:allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        category
        date(formatString: "MMMM Do, YYYY")
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const blog = ({
  data: { blog: { nodes: blogs } }
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="Alex Leung shares his thought on technology and life in his blog." />
      <ScrollUpButton ContainerClassName="ScrollUpButton__Container" />
      <section className="blog-page">
        <Blogs blogs={blogs} />
        <Footer color="#fff" />
      </section>
    </Layout>
  )
}

export default blog
