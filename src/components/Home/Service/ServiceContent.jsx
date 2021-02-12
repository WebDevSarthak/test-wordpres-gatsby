import React from 'react'

function ServiceContent(props){
    
    return(
        <div>    

            <h4 class="mt_20">{props.text}</h4>
            <p class="mt_20">{props.paraText}</p>

        </div> 
    )
}

export default ServiceContent
