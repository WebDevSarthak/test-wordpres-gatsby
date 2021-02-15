import React from "react"

function FooterBox(props) {
    return (
        <div className={props.divClass}>
            <h5>{props.heading}</h5>
            <ul>
                <li><a href="#">{props.textOne}</a></li>
                <li><a href="#">{props.textTwo}</a></li>
                <li><a href="#">{props.textThree}</a></li>
                <li><a href="#">{props.textFour}</a></li>
                <li><a href="#">{props.textFive}</a></li>
            </ul>
        </div>
    )
}

export default FooterBox