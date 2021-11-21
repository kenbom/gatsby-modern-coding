import React from "react"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

const NavBtn = () => {
  return (
    <div>
      <Sbtn type="button" className="toggle-btn">
        <FaAlignRight />
      </Sbtn>
    </div>
  )
}

const Sbtn = styled.button`
  background: transparent;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.57);
`

export default NavBtn
