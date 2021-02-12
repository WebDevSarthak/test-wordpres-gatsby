import { checkPropTypes } from 'prop-types'
import React from 'react'
import './ContactForm.css'

function ContactFormInput(props){
    return(
        <div class={props.divClass}>
          <input type={props.type} class={props.class} placeholder={props.placeholder} />
        </div>
    )
}

export default ContactFormInput
