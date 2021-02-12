import React from 'react'

function ContactAreaBox(props) {

    console.log(props)
    return (
        
            <div className="col-lg-3 col-md-4 mt_30 text-center">
                <a href={props.href}><i className={props.font}></i></a>
                <h3><a href={props.tel}>{props.h3}</a></h3>
                <p>{props.text}</p>
            </div>
        
    )
}

export default ContactAreaBox

// <div className="col-lg-3 col-md-4 mt_30 text-center">
//     <a href="tel:1300438232"><i className="fas fa-phone"></i></a>
//     <h3><a href="tel:1300438232">via Phone</a></h3>
//     <p>Give a trained Town Planner at Precise Planning a call to discuss your situation.</p>
// </div>
//
// <div className="col-lg-3 col-md-4 mt_30 text-center">
//     <a href="mailto:contact@preciseplanning.com.au"><i className="far fa-envelope"></i></a>
//     <h3><a href="mailto:contact@preciseplanning.com.au">via Email</a></h3>
//     <p>Email Precise Planning and a trained Town Planner will get back to you within 24 hours.</p>
// </div> 