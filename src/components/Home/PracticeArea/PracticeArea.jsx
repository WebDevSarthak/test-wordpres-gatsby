import React from 'react'
import Background from '../../../assets/img/practise_bg.jpg'
// import '../../style.css'
import './PracticeArea.css'


function PracticeArea(){
    return(
        <div>
            <div class="practise_area" style={{backgroundImage: `url(${Background}`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="title text-white">Target Practice</h2>
                            <h5 class="mt_30">Access our original research, raw data, and planning advice</h5>
                            <a href="/#" class="link mt_30">
                                <span>Learn more about our online data</span>
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default PracticeArea



