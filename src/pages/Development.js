import React from 'react'
import Layout from "../components/layout"
import '../components/helper.css'
import '../components/style.css'
import Header from '../components/Home/Header/Header'
import HomeArea from '../components/Development/HomeArea/HomeArea'
import Application from '../components/Development/Application/Application'
import ContactArea from '../components/Home/ContactArea/ContactArea'
import ContentArea from '../components/Development/ContentArea/ContentArea'
import ContactForm from '../components/Development/ContactForm/ContactForm'
import PracticeArea from '../components/Home/PracticeArea/PracticeArea'
import Footer from '../components/Home/Footer/Footer'
import '../components/responsive.css'

function Development(){
    return (
        <Layout>
            <Header />
            <HomeArea />
            <Application />
            <ContactArea />
            <ContentArea />
            <ContactForm />
            <PracticeArea />
            <Footer />
        </Layout>   
    )
}

export default Development




















