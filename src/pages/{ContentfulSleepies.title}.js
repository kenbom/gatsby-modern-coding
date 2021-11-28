import React from 'react'
import { graphql, Link } from 'gatsby'
import slugify from 'slugify'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ContentfulSleepies = ({data}) => {
    const titleTag = data.contentfulSleepies.title
    // const sluggedTitle = slugify(titleTag, { replacement: "-"})
    return (
        <div>
          <Navbar></Navbar>
           <h1>{titleTag}</h1>
           {/* <h1>{sluggedTitle}</h1> */}
           <GatsbyImage image={data.contentfulSleepies.picture.gatsbyImageData} alt="ungry"></GatsbyImage>
           <p>{data.contentfulSleepies.monologue}</p>
           <Footer></Footer>
        </div>
    )
}

export const query = graphql`
  query getSinglePage($title:String){
    contentfulSleepies(title: {eq: $title}) {
      title  
     monologue
      picture {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
export default ContentfulSleepies

