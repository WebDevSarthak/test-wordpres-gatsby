import React from 'react'
import Img from '../../../assets/img/home.jpg'
// import '../../style.css'
import './HomeArea.css'

function HomeArea() {
    return (
        <div>
            <div class="home_area" style={{backgroundImage: `url(${Img})`}}>
                <div class="container container_lg">
                    <div class="row">
                        <div class="col-12 text-center">
                           <h1><span>Town</span> Planning <br /> Experts &amp; <span>Consultants</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default HomeArea