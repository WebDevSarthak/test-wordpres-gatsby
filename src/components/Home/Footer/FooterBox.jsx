import React from "react"

function FooterBox(props) {
    return (
        <div>
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

                            // < ul >
                            //     <li><a href="#">Residential</a></li>
                            //     <li><a href="#">Commercial</a></li>
                            //     <li><a href="#">Government</a></li>
                            //     <li><a href="#">Tourism</a></li>
                            //     <li><a href="#">Health</a></li>
                            // </ul >
                            // <h5>Precise Planning</h5>
                            // <ul>
                            //     <li><a href="#">Careers</a></li>
                            //     <li><a href="#">Media Enquiries</a></li>
                            //     <li><a href="#">Privacy</a></li>
                            //     <li><a href="#">Disclaimers</a></li>
                            //     <li><a href="#">Make a Payment</a></li>
                            // </ul>