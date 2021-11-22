import React from "react"
import styled from "styled-components"
import HeroImg from "../assets/img/DSC00350.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <>
      <Ssection>
        <Simg>
          <StaticImage
            src="../assets/img/DSC00350.jpg"
            //src={HeroImg}
            alt="coco"
            placeholder="blurred"
          />
        </Simg>

        <Sdiv>
          <Sp>Don't</Sp>
          <Sp>get me</Sp>
          <Sp>wrong....</Sp>
        </Sdiv>
      </Ssection>
    </>
  )
}

const Ssection = styled.section`
  display: grid;
  grid-template-rows: 1fr;
`
// const Simg = styled.img`
//   grid-area: 1/1;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
const Simg = styled.span`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
 
`
const Sdiv = styled.div`
  grid-area: 1/1;
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
 
`
const Sp = styled.p`
  color: white;
  font-size: 6vw;
  margin: -1vw;
  z-index: 100;
`
export default Hero
