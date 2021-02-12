import React from 'react'
import './Footer.css'
import FooterBox from './FooterBox'

function Footer(){

    return(
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 mt_30">
                            <FooterBox heading="Services" textOne="Urban Planning" textTwo="Strategic Planning" textThree="Project Management" textFour="Pre-development" textFive="Government Liaison" />
                        
                        </div>
                        <div class="col-lg-3 col-md-2 mt_30">
                        <FooterBox heading="Sectors" textOne="Residential" textTwo="Commercial" textThree="Government" textFour="Tourism" textFive="Health" />
                        </div>
                        <div class="col-md-3 mt_30">
                            <FooterBox heading="Precise Planning" textOne="Careers" textTwo="Media Enquiries" textThree="Privacy" textFour="Disclaimers" textFive="Make a Payment" />
                           
                        </div>
                        <div class="col-lg-3 col-md-4 mt_30">
                            <h5>Connect with Precise Planning</h5>
                            <a href="mailto:contact@preciseplanning.com.au" class="email">contact@preciseplanning.com.au</a>
                            <a href="tel:1300438232" class="phone">1300 438 232</a>
                            <a href="#">Contact Form</a>
                            <p>152 Sailors Bay Road, Northbridge NSW 2063</p>
                        </div>
                        <div class="col-12 text-center mt_50">
                            <p class="mx-auto">© Precise Planning 2000 - 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

