import React from "react"
import sleepyContents from "../constants/sleepyContents"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import catZero from "../assets/img/DSC00084.jpg"
import { getSrc } from "gatsby-plugin-image"

const Sleepies = () => {
  const catPhoto = "../assets/img/DSC00084.jpg"
  const catPict = sleepyContents[0].image
  return (
    <>
      <div>
        <h2>{sleepyContents[0].title}</h2>
        <p>{sleepyContents[0].text}</p>
        <p>{sleepyContents[0].image}</p>
      </div>
      <figure>
        <StaticImage
          src="../assets/img/DSC00084.jpg"
          alt="sleepy0"
        ></StaticImage>
        <StaticImage src={catPhoto} alt="sleepy0"></StaticImage>
        <StaticImage src={catPict} alt="sleepy0"></StaticImage>
        <img src={catZero} alt="sleepy0" width="200"></img> 
        <img src={catPict} alt="sleepy0" width="200"></img> 
        {/* <GatsbyImage src={catZero} alt="sleepy0"></GatsbyImage> */}
      </figure>
      <div>
        <h2>{sleepyContents[1].title}</h2>
        <p>{sleepyContents[1].text}</p>
      </div>
      <figure>
        <StaticImage
          src="../assets/img/DSC00080.jpg"
          alt="sleepy0"
        ></StaticImage>
        {/* <StaticImage src={sleepyContents[0].image} alt="sleepy0"></StaticImage> */}
      </figure>
    </>
  )
}

export default Sleepies