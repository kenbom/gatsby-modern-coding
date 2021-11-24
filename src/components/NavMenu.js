import React from 'react'
import {Link} from "gatsby"
import styled from 'styled-components'

const NavMenu = () => {
    return (
        <div>
            <Sul>
                <li><Link to="">Home</Link> </li>
                <li><Link to="">Services</Link> </li>
                <li><Link to="">Contact</Link> </li>
            </Sul>
        </div>
    )
}

export default NavMenu

const Sul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  list-style: none;
  font-size: 1rem;
  @media (max-width: 768px) {
      display: none;
  }
`
const Sui= styled.li`
font-size: 5vw;
`