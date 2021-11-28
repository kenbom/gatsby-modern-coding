import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Sdiv>
      <Sfooter>
        <h5>copyright &copy; {new Date().getFullYear()} Nekohige Lab.</h5>
      </Sfooter>
    </Sdiv>
  )
}

const Sdiv = styled.div`
  height: 100px;
`
const Sfooter = styled.footer`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.57);
  display: grid;
  align-items: center;
  justify-content: center;
  h5 {
    align-text: center;
    margin-top: auto;
    margin-bottom: auto;
  }
`
export default Footer
