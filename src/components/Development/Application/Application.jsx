import React from 'react'
import Img from '../../../assets/img/da.png' 
import './Application.css'


function Application(){
    return (
        <div>
            <div class="town_plannig section_padd">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mt_30">
                            <h2 class="title">DEVELOPMENT APPLICATIONS</h2>
                            <h4 class="mt_30">Our comprehensive expertise.</h4>
                        </div>
                        <div class="col-lg-8 mt_30">
                            <h3 class="title2">LISTEN TO AN EXPERT</h3>
                            <img src={Img} class="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}        

export default Application
