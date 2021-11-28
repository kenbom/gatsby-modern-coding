import React from 'react'
import Logo from "../assets/img/nekohigeLogoEn.svg"
import NavMenu from "./NavMenu"
import styled from 'styled-components'

const Navbar = () => {
    return (
      <>
        <Sdiv>
          <img src={Logo} alt="logo" width="150px"></img>
          <NavMenu></NavMenu>
        </Sdiv>
      </>
    )
}

const Sdiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  align-items: baseline;

  }
`
export default Navbar
