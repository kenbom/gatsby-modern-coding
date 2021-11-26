import React from 'react'
import { graphql } from 'gatsby'
import slugify from 'slugify'

const ContentfulSleepies = ({data}) => {
    const titleTag = data.contentfulSleepies.title
    const sluggedTitle = slugify(titleTag, { replacement: "-"})
    return (
        <div>
           <h1>{titleTag}</h1>
           <h1>{sluggedTitle}</h1>
        </div>
    )
}

export const query = graphql`
  query getSinglePage($title:String){
    contentfulSleepies(title: {eq: $title}) {
      title  
    }
  }
`
export default ContentfulSleepies

