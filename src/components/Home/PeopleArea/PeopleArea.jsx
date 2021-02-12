import React from 'react'
import Background from '../../../assets/img/people.jpg'
import './PeopleArea.css'

function PeopleArea(){
    return(
        <div>
            <div class="people_area section_padd">
                <div class="container container_lg">
                    <div class="row">
                        <div class="col-lg-4 mt_30">
                            <h2 class="title">our people</h2>
                            <h4 class="mt_30">Managing Director of Precise Planning</h4>
                        </div>
                        <div class="col-lg-8 mt_30">
                            <div class="content">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="img_wrapper position-relative d-inline-block">
                                            <img src={Background} class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>Jeffrey Bulfin</h4>
                                        <p class="mt_20">Jeffrey Bulfin has worked in town planning and property development since 1981. With an initial background in land surveying, Jeffrey has achieved success in designing and obtaining approval to a wide range of land use proposals as well as managing the... <a href="/#">See More</a></p>
                                        <a href="/#" class="link mt_20">
                                            <span>View Profile</span>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleArea