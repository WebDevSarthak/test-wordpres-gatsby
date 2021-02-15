import React from 'react'

function ContactAreaBox(props) {

    return (
        
            <div className="col-lg-3 col-md-4 mt_30 text-center">
                <a href={props.href}><i className={props.font}></i></a>
                <h3><a href={props.tel}>{props.h3}</a></h3>
                <p>{props.text}</p>
            </div>
        
    )
}

export default ContactAreaBox
