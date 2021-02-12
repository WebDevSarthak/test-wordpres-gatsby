import React from 'react'
import ImgFour from '../../../assets/img/img4.jpg'
import ImgFive  from '../../../assets/img/img5.jpg'
import ImgSix from '../../../assets/img/img6.jpg'
import ImgSeven from '../../../assets/img/img7.jpg'
import './Project.css'
import ProjectBox from './ProjectBox'

function Project(){
    return(
        <div>
            <div class="project_area section_padd">
                <div class="container container_lg">
                    <div class="row">
                        <div class="col-lg-4 mt_30">
                            <h2 class="title">our projects</h2>
                            <h4 class="mt_30">Town Planners and Project Managers</h4>
                        </div>
                        <div class="col-lg-8 mt_30">
                            <div class="content">
                                <p class="mt_20">With hundreds of projects completed in our two decades of our town planning consultancy, more than 98% of our clients' developments have been successful. We are proud to be one of the most effective town planning agencies in New South Wales with a reputation for professionalism and success.</p>
                                <div class="title w-100"></div>
                                <div class="row">
                                    <ProjectBox img={ImgFour} textOne="Strategic Planning" textTwo="Business Park" />
                                    <ProjectBox img={ImgFive} textOne="Project Management" textTwo="Project Management" />
                                    <ProjectBox img={ImgSix} textOne="Masterplanning" textTwo="Masterplanning" />
                                    <ProjectBox img={ImgSeven} textOne="Rezoning" textTwo="Residential Rezoning" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Project