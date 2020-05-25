import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout className="home-page">
      <SEO title="Home" description="Alex Leung, a software engineer"/>
      <Hero />
    </Layout>
  )
}

