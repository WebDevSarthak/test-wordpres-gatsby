import React from 'react'
import './SupportArea.css'


function SupportArea(){
    return(
        <div>
            <div class="support_area">
                <div class="container container_lg">
                    <div class="row">
                        <div class="col-md-4 mt_30">
                            <div class="media align-items-center">
                                <a href="tel:1300438232">
                                <i class="fas fa-phone"></i></a>
                                <div class="media-body">
                                    <h5><a href="tel:1300438232">1300 GET A DA</a></h5>
                                    <p>24 hours – 1300 438 232</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt_30">
                            <div class="media align-items-center">
                                <a href="/#">
                                <i class="fas fa-comments"></i></a>
                                <div class="media-body">
                                    <h5><a href="/#">Chat Online</a></h5>
                                    <p>Experts Available 24 hours</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt_30">
                            <div class="media align-items-center">
                                <a href="/#">
                                <i class="fas fa-map-marker-alt"></i></a>
                                <div class="media-body">
                                    <h5><a href="/#">Meet with us</a></h5>
                                    <p>Organise for a face to face meeting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default SupportArea