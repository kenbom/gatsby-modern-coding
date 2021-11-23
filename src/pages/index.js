import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Sleepies from "../components/Sleepies"
//import Logo from "../assets/img/logo.svg"

export default function Home() {
  return (
  <div>
  <Navbar></Navbar>
  <Hero></Hero>
  <Sleepies></Sleepies>
  </div>
  )
}
