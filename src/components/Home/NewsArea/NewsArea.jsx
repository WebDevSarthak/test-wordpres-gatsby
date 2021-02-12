import React from 'react'
import ImgOne from '../../../assets/img/img1.png'
import ImgTwo from '../../../assets/img/img2.jpg'
import ImgThree from '../../../assets/img/img3.jpg'
import NewsAreaBox from './NewsAreaBox'
// import '../../style.css'
import './NewsArea.css'

function NewsArea(){
    const date = "June 3, 2020"

    const headingTextOne =  "What is a Clause 4.6 Variation?"
    const headingTextTwo =  "HomeBuilder Grant Eligibility"
    const headingTextThree =  "Priority Projects: Fast Tracked Developments"

    return(
        <div>
            <div class="news_area">
                <div class="container container_lg">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center mb_20">
                            <h2 class="title">Town Planning <br />INSIGHTS &amp; NEWS</h2>
                            <h4 class="mt_30">Relevant, insightful, independent.</h4>
                        </div>

                        {/* <NewsAreaBox text="Town Planning" date={date} heading={headingTextOne} img={ImgOne} />
                        <NewsAreaBox text="News" date={date} heading={headingTextTwo} img={ImgTwo} />
                        <NewsAreaBox text="News" date={date} heading={headingTextThree} img={ImgThree} /> */}

                        <div class="col-lg-4 col-md-6 mt_30">
                            <a href="/#" class="box" style={{backgroundImage: `url(${ImgOne})`}}>
                                <div class="category">Town Planning</div>
                                <div class="box_content">
                                    <div>
                                        <div class="d-flex align-items-center date">
                                            <i class="fas fa-calendar-alt"></i>
                                            June 3, 2020
                                        </div>
                                        <h4>What is a Clause 4.6 Variation?</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mt_30">
                            <a href="/#" class="box" style={{backgroundImage: `url(${ImgTwo})`}}>
                                <div class="category">NEWS</div>
                                <div class="box_content">
                                    <div>
                                        <div class="d-flex align-items-center date">
                                            <i class="fas fa-calendar-alt"></i>
                                            June 3, 2020
                                        </div>
                                        <h4>HomeBuilder Grant Eligibility</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mt_30">
                            <a href="/#" class="box" style={{backgroundImage: `url(${ImgThree})`}}>
                                <div class="category">NEWS</div>
                                <div class="box_content">
                                    <div>
                                        <div class="d-flex align-items-center date">
                                            <i class="fas fa-calendar-alt"></i>
                                            May 28, 2020
                                        </div>
                                        <h4>Priority Projects: Fast Tracked Developments</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 text-center mt_35"> 
                            <a href="/#" class="link">
                                <span>View all Insights &amp; News</span>
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default NewsArea