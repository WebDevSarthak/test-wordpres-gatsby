import React from "react"
import { withPrefix, Link } from "gatsby"
import './Header.css'
import Development from '../../../pages/Development'
import './Header.css'

function HeaderMenu(props) {
    return (
                <li class="nav-item">
                    <a href={props.href} class={props.class}>{props.text}</a>
                </li>
    )
}

export default HeaderMenu




// <ul id="menu">
// <li class="nav-item">
//     <a href={props.href} class={props.class}>{props.text}</a>
// </li>
// </ul>