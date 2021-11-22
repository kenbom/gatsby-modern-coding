import React from "react"
import styled from "styled-components"
import HeroImg from "../assets/img/hero.jpg"

const Hero = () => {
  return (
    <>
      <Ssection>
        <Sdiv>
          <Sp>Sleepy</Sp>
          <Sp>Cats</Sp>
        </Sdiv>
      </Ssection>
    </>
  )
}

const Ssection = styled.section`
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
`
const Sdiv = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100%;
`
const Sp = styled.p`
  color: gray;
  font-size: 3rem;
  margin: 2px;
`
export default Hero
