import React from 'react'
import { graphql } from 'gatsby';
import ScrollUpButton from 'react-scroll-up-button';
import Layout from "../components/Layout";
import Biograph from '../components/about/Biograph';
import Timeline from '../components/about/Timeline';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    timeline: allStrapiExperiences(sort: {fields: startDate, order: DESC}) {
      nodes {
        company
        startDate(formatString: "MMM YYYY")
        endDate(formatString: "MMM YYYY")
        desc {
          id
          name
        }
        id
        position
        strapiId
      }
    }
  }
`

const about = ({
  data: { about: { nodes: bio } },
  data: { timeline: { nodes: exp } }
}) => {
  return (
    <Layout>
      <SEO title="About" description="About Alex Leung" />
      <ScrollUpButton ContainerClassName="ScrollUpButton__Container"/>
      <Biograph bio={bio} />
      <Timeline exp={exp} />
      <Footer color="hsl(210, 36%, 96%)" />
    </Layout>
  )
}


export default about
