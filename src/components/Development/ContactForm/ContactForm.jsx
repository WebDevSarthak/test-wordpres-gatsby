import React from 'react'
import './ContactForm.css'
import ContactFormInput from './ContactFormInput'

function ContactForm(){
    return (
        <div>
            <div class="contact_form">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <form action="#">
                                <h4 class="mb_15">Organise a coffee with us!</h4>
                                <div class="row form-row">

                                    <ContactFormInput divClass="col-md-6 mt_10"  type="text" class="input_box" placeholder="First Name" />
                                    
                                    <ContactFormInput divClass="col-md-6 mt_10" type="text" class="input_box" placeholder="Last Name" />
                                    
                                    <ContactFormInput divClass="col-12 mt_10" type="email" class="input_box" placeholder="Email Address" />

                                    <div class="col-12 mt_10">
                                        <textarea class="input_box" rows="6" placeholder="Hi, I have a site/situation I would like to discuss with you!"></textarea>
                                    </div>
                                    <div class="col-12 mt_10">
                                        <button type="submit" class="button w-100">Contact Us</button>
                                    </div>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm