import React from "react"
import styled from "styled-components"
import Logo from "../assets/img/logo.svg"

export default function Home() {
  return (
  <div>
  <img src={Logo} alt="logo"></img>
  <Div>Hello world!</Div>
  </div>
  )
}

const Div =styled.div`
color:white;
font-size: 2rem;
background-color: gray;
`