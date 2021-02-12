import React from 'react'
import './ContentArea.css'
import ContentAreaLiText from './ContentAreaLiText'


function ContentArea() {

    return (
        <div>
            <div class="content_area">
                <div class="container">
                    <div class="row justify-content-center no-gutters">
                        <div class="col-xl-10">
                            <div class="content pt-0">
                                <p class="mt_20"><span class="light_text">Whether you are a landowners, developer, or property investor looking to value-add to raw development sites,</span> the Town Planners at Precise Planning will professionally manage your next development application (DA). With more than two decades of experience in town planning and hundreds of projects, Precise Planning has the expertise to manage your next DA successfully.</p>

                                <p class="mt_40"><strong>What is involved in a Development Application?</strong></p>
                                <p class="grey_text">Development consent is the first approval needed to begin a development project. You can gain consent by applying to the right authority via a Development Application. The NSW State Government provides a general guide to the process of a development application <a href="#">here.</a></p>
                                <p class="mt_30 light_text">The preparation of a development application consists of three primary stages, including commissioning specialist studies, preparing a planning report, and liaising with the relevant planning authority.</p>

                                <div class="title w-50 mt_20"></div>
                                <h4 class="theme_color mt_20">We manage the entire <br /> development application process </h4>

                                <p class="mt_40"><strong>Specialist Studies</strong></p>
                                <p class="light_text">An essential part of the development application includes commissioning relevant experts to explain the social, economic, and ecological impacts of the proposed development. Precise Planning has long-standing relationships with some of the best specialist consultants allowing us a unique position to organise everything needed for your application.</p>

                                <p class="mt_40"><strong>The Planning Report</strong></p>
                                <p class="light_text">The planning report is the foundation of any development application. The purpose of this report is to explain the proposed development and its impacts, compile the findings of all specialist studies, and ensure legislative and DCP compliance. The planning report for a development application includes either:</p>

                                <ul>
                                    <li><p class="light_text">the <span class="grey_text">Statement of Environmental Effects (SEE)</span>, or </p></li>
                                    <li><p class="light_text">the Environmental Impact Statement </p></li>
                                </ul>
                                <p class="mt_30 light_text">If there is any potential impermissibility, we will identify and address these issues. Ensuring quality work in the initial stages of development helps minimise the likelihood of issues in the future.</p>

                                <p class="mt_40"><strong>Government Liaisons</strong></p>

                                <p class="light_text">As Town Planners, we deal with Local Councils, State Governments and other government agencies every single day. Precise Planning will ensure your application has the highest likelihood of approval by providing ongoing, effective communication with the relevant authorities.</p>

                                <p class="mt_40"><strong>Our Specialities</strong></p>
                                <ul>

                                    <ContentAreaLiText text="Industrial" />
                                    <ContentAreaLiText text="Commercial" />
                                    <ContentAreaLiText text="Residential" />
                                    <ContentAreaLiText text="Subdivisions" />
                                    <ContentAreaLiText text="Poultry Farms" />
                                    <ContentAreaLiText text="Logistics Depots" /> 
                                    <ContentAreaLiText text="Agricultural Activities" />
                                    <ContentAreaLiText text="Tourist Facilities" />                                   
                                </ul>
                                <p class="mt_30 light_text">Precise Planning is excited to help you with your next development. With some of the most experienced town planners in Sydney, your development is in good hands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContentArea