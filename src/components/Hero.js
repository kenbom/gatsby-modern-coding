import React from "react"
import styled from "styled-components"
import HeroImg from "../assets/img/DSC00350.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <>
      <StaticImage
        src="../assets/img/DSC00350.jpg"
        alt="coco"
        placeholder="blurred"
      />
      <Ssection>
        {/* <Simg>
          <StaticImage
            src={HeroImg}
            alt="coco"
            placeholder="blurred"
          />
          </Simg> */}
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
  grid-template-rows: 650px;
`
const Simg = styled.img`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Sdiv = styled.div`
  grid-area: 1/1;
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
`
const Sp = styled.p`
  color: gray;
  font-size: 4rem;
  margin: -10px;
`
export default Hero
