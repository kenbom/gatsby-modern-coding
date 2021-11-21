import React from 'react'
import {Link} from "gatsby"
import styled from 'styled-components'

const NavMenu = () => {
    return (
        <div>
            <Sul>
                <li><Link to="">ホーム</Link> </li>
                <li><Link to="">サービス案内</Link> </li>
                <li><Link to="">お問い合わせ</Link> </li>
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
font-size: 0.8rem;
`