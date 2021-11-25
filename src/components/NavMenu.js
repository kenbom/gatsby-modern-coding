import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
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
      {/* <button onClick={()=> {setState(!state)}}>
        click, me
      </button> */}
      <div>
      <Sbtn type="button" onClick={()=> {setState(!state)}}>
        <FaAlignRight />
      </Sbtn>
    </div>
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
const Sbtn = styled.button`
  background: transparent;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.57);
  @media(min-width:768px){
    display: none;
  }
`
