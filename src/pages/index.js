import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout className="home-page">
      <SEO title="Home" description="This is Alex Leung's home page. He is a software generalist and electrical engineer, having graduated from the University of Waterloo with a BASc and the Georgia Institute of Technology with an MSECE." />
      <Hero />
    </Layout>
  )
}

