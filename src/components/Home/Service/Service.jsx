import React from 'react'
// import '../../style.css'
import './Service.css'
import ServiceContent from './ServiceContent'

function Service(){
    
    const textOne = "Development Applications"
    const paraTextOne = "The application process for a Development Application (DA) and the various other permissions are challenging to navigate. We ensure the best chance of approval by consulting with industry experts to ensure our application covers all possible considerations. Learn more about development applications "

    const textTwo = "Modification of Consents"
    const paraTextTwo = 'If you have an existing consent but want to make a modification to your consent conditions, Precise Planning will prepare your modification application under the relevant sections which include S4.55(1), S4.55(1A), S4.55(2), and S4.56. Learn more about modification '

    const textThree = "Site Feasibility Reports"
    const paraTextThree = "Developments of all varieties include a certain degree of risk. With our extensive experience in town planning, we conduct comprehensive preliminary research to reveal any potential liabilities of concern. By exposing inherent difficulties early on, we can plan effectively, reduce reactionary spending, and maximise the likelihood of success for your development."

    const textFour = "Buyers Agency Services"
    const paraTextFour = "Finding and assessing potential developments sites that fit specific criteria can be an expensive and time-consuming exercise. Due to the nature of our profession, we frequently come across off-market development sites and connect buyers with sellers. We assess the development potential and can provide advice on the range of projects concerning town planning matters."

    return(
        <div>
            <div class="service section_padd">
                <div class="container container_lg">
                    <div class="row">
                        <div class="col-lg-4 mt_30">
                            <h2 class="title">Our Services</h2>
                            <h4 class="mt_30">More than town planning.</h4>
                        </div>
                         <div class="col-lg-8 mt_30">

                         <div class="content">
                                <p class="mt_20">Precise Planning understands that success stems from well-established relationships with investors, consultants, government agencies, and landowners. Collaboration, partnership, and relationship are paramount to our approach in project management.</p>
                                <p class="mt_20">We are excited to work you on your next project. If you would like to discuss your next development, reach out to us <a href="/#">here!</a></p>
                        <ServiceContent text={textOne} paraText={paraTextOne}><a href="/#">here</a>.</ServiceContent>
                        <ServiceContent text={textTwo} paraText={paraTextTwo}><a href="/#">here</a>.</ServiceContent>
                        <ServiceContent text={textThree} paraText={paraTextThree} />
                        <ServiceContent text={textFour} paraText={paraTextFour} />

                        </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Service