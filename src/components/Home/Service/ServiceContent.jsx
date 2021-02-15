import React from 'react'
import './Service.css'

function ServiceContent(props){
    
    return(
        <div>    

            <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText} {props.children}</p>
            

        </div> 
    )
}

export default ServiceContent
