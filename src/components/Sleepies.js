import React from "react"
import sleepyContents from "../constants/sleepyContents"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import catZero from "../assets/img/DSC00084.jpg"
import { getSrc } from "gatsby-plugin-image"
import styled from "styled-components"

const Sleepies = () => {
  const catPhoto = "../assets/img/DSC00084.jpg"
  const catPict = sleepyContents[0].image
  return (
    <>
      <Sarticle>
        <div>
          <Sh2>{sleepyContents[0].title}</Sh2>
          <p>{sleepyContents[0].text}</p>
          {/* <p>{sleepyContents[0].image}</p> */}
        </div>
        <figure>
          <StaticImage
            src="../assets/img/DSC00084.jpg"
            alt="sleepy toto"
            placeholder="blurred"
            height="50%"
            // width="100%"
          ></StaticImage>
          {/* <StaticImage src={catPhoto} alt="sleepy0"></StaticImage> */}
          {/* <StaticImage src={catPict} alt="sleepy0"></StaticImage> */}
          {/* <img src={catZero} alt="sleepy0" width="200"></img>  */}
          {/* <img src={catPict} alt="sleepy0" width="200"></img>  */}
          {/* <GatsbyImage src={catZero} alt="sleepy0"></GatsbyImage> */}
        </figure>
      </Sarticle>
      <Sarticle>
        <div>
          <Sh2>{sleepyContents[1].title}</Sh2>
          <p>{sleepyContents[1].text}</p>
        </div>
        <figure>
          <StaticImage
            src="../assets/img/DSC00080.jpg"
            alt="sleepy nono"
            height="50%"
          ></StaticImage>
          {/* <StaticImage src={sleepyContents[0].image} alt="sleepy0"></StaticImage> */}
        </figure>
      </Sarticle>
    </>
  )
}

const Sh2 = styled.h2`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 6vw;
  @media (min-width: 768px) {
    font-size: 3vw;
  }
`
const Sp = styled.p`
margin: 0;
`
const Sarticle=styled.article`
display: flex;
flex-direction: column;
@media(min-width: 768px){
flex-direction: row; 
}

`
export default Sleepies
