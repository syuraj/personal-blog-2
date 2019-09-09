import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/socialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About MakerSkills Club</h2>
        <p>
          MakerSkills Club is a place to find instruction, fun activities,
          professional development, and like-minded creative people to learn
          with.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Description</h2>
        <p>
          The IRBE, as an active member of the sharing economy since 2013, works
          with and assists a wide variety of organizations. For Fall of 2019
          we’re happy to announce some of the partners assisting in bringing
          creative technology to the TTL Makerspace.
        </p>
        <h2>ProjectBoard</h2>
        <p>
          I’m happy to announce an exciting collaboration with Engineering.com -
          the number-one online community for engineers and the
          engineering-minded. In Fall of 2019 we’ll be hosting all of our
          programs using ProjectBoard, their ideation platform, custom-made for
          exploring, developing and sharing projects! You’ll be able to see
          updates from any of our programs, get to know the instructors, and
          help us shape the experience. You can follow along online, or download
          either the Android or iOS apps to get notifications about activities.
        </p>
        <h2>OddlyStudios</h2>
        <p>
          Oddly, a well-known creative development partner for many global
          brands is the provider for much of the equipment that lets us teach
          tech-programs. Single-board computers, micro-controllers, motor
          drivers, networking equipment, and much of the audio-visual equipment
          in the space has been donated by them. We’re pleased to be
          well-equipped with the same gear they have used in their award-winning
          productions.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
