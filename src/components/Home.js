import React from 'react'
import '../components/helper.css'
import '../components/style.css'
import Preloader from './Home/Preloader/Preloader'
import Header from './Home/Header/Header'
import HomeArea from './Home/HomeArea/HomeArea'
import ContactArea from './Home/ContactArea/ContactArea'
import TownPlanning from './Home/TownPlanning/TownPlanning'
import NewsArea from './Home/NewsArea/NewsArea'
import Project from './Home/Project/Project'
import WorkArea from './Home/WorkArea/WorkArea'
import Service from './Home/Service/Service'
import PeopleArea from './Home/PeopleArea/PeopleArea'
import SupportArea from './Home/SupportArea/SupportArea'
import PracticeArea from './Home/PracticeArea/PracticeArea' 
import BackToTop from './Home/BackToTop/BackToTop'
import Footer from './Home/Footer/Footer'
import '../components/responsive.css'

function Home(){
    return(
        
        <div>
            <body>
                <Preloader />
                <Header />
                <HomeArea />
                <ContactArea />
                <TownPlanning />
                <NewsArea />
                <Project />
                <WorkArea />
                <Service />
                <PeopleArea />
                <SupportArea />
                <PracticeArea />
                <Footer />
                <BackToTop />
            </body>
        </div>   
    )
}

export default Home