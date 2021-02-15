import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './BackToTop.css'

function BackToTop(){
    return(
        <div>
            <a href="#" className="back-to-top"><i className="fal fa-angle-up"></i></a>
        </div>
    )

}

export default BackToTop