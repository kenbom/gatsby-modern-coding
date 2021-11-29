import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
const NavMenu = () => {
  const [state, setState] = useState(true)
  // const ButtonOnclick = setState(!state)
  return (
    <div>
      <div>
        <Sbtn
          type="button"
          onClick={() => {
            setState(!state)
          }}
        >
          <FaAlignRight />
        </Sbtn>
      </div>
      <Sul show={state}>
        <li>
          <Link
            to="/"
            onClick={() => {
              setState(!state)
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cat-peace"
            onClick={() => {
              setState(!state)
            }}
          >
            HappyEnd
          </Link>
        </li>
        <li>
          <Link
            to="/cat-angry"
            onClick={() => {
              setState(!state)
            }}
          >
            AngryEnd
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/cat-bossy"
            onClick={() => {
              setState(!state)
            }}
          >
            BossyEnd
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/cat-joker"
            onClick={() => {
              setState(!state)
            }}
          >
            MarvelyEnd
          </Link>{" "}
        </li>
      </Sul>
    </div>
  )
}

export default NavMenu

const Sul = styled.ul`
  display: ${props => (props.show ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  animation: hoge 0.6s ease;
  }

@keyframes hoge {
  0% {height: 0px;}
  100% {height: 200px;}
}
 @media(min-width:768px){
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    list-style: none;
    font-size: 1rem;
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
  margin-left: 50px;
  @media (min-width: 768px) {
    display: none;
  }
`
