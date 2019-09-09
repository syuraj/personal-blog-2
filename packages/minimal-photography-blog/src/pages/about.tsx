import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="MakerSkills Club is a place to find instruction, assistance, creativity and professional development."
      />

      <About />
    </Layout>
  )
}

export default AboutPage
