import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavMenu = () => {
  const [state, setState]=useState(true)
  // const ButtonOnclick = setState(!state)
  return (
    <div>
      <Sul direction={state}>
        {/* <Sul> */}
        <li>
          <Link to="">Home</Link>{" "}
        </li>
        <li>
          <Link to="">Services</Link>{" "}
        </li>
        <li>
          <Link to="">Contact</Link>{" "}
        </li>
      </Sul>
      <button onClick={()=> {setState(!state)}}>
        click, me
      </button>
    </div>
  )
}

export default NavMenu

const Sul = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction? "column":"row"};
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  list-style: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`
const Sui = styled.li`
  font-size: 5vw;
`
