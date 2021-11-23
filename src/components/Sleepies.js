import React from "react"
import sleepyContents from "../constants/sleepyContents"
import { StaticImage } from "gatsby-plugin-image"

const Sleepies = () => {
  return (
    <>
      <div>
        <p>{sleepyContents[0].title}</p>
        <p>{sleepyContents[0].text}</p>
      </div>
      <figure>
        <StaticImage
          src="../assets/img/DSC00080.jpg"
          alt="sleepy0"
        ></StaticImage>
        {/* <StaticImage src={sleepyContents[0].image} alt="sleepy0"></StaticImage> */}
      </figure>
      <div>
        <p>{sleepyContents[1].title}</p>
        <p>{sleepyContents[1].text}</p>
      </div>
      <figure>
        <StaticImage
          src="../assets/img/DSC00084.jpg"
          alt="sleepy0"
        ></StaticImage>
        {/* <StaticImage src={sleepyContents[0].image} alt="sleepy0"></StaticImage> */}
      </figure>
    </>
  )
}

export default Sleepies
