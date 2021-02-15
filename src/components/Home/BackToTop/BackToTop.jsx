import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './BackToTop.css'

function BackToTop(){
    return(
            <a href="#" className="back-to-top" style={{display: "inline"}}>
                <i className="fal fa-angle-up"></i>
            </a>
    )
}

export default BackToTop

{/* <a href="#" class="back-to-top" style="display: inline;"><i class="fal fa-angle-up"></i></a> */}