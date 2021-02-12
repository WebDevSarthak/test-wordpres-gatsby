import React from 'react'
// import '../../Global.css'
// import './NewsArea.css'


function NewsAreaBox(props) {
console.log(props)    
console.log(props.img)
    return (
        <div>
            <div class="col-lg-4 col-md-6 mt_30">
                
                <a href="/#" class="box" style={{backgroundImage: `url(${props.img})`}}>
                {/* <a href="/#" class="box" style={{ backgroundImage: `url(${props.img})` }}> */}
                    <div class="category">{props.text}</div>
                    <div class="box_content">
                        <div>
                            <div class="d-flex align-items-center date">
                                <i class="fas fa-calendar-alt"></i>
                                            {props.date}
                                        </div>
                            <h4>{props.heading}</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default NewsAreaBox


// <div>
// <div class="col-lg-4 col-md-6 mt_30">
// <a href="/#" class="box" style={{backgroundImage: `url(${ImgOne})`}}>
//     <div class="category">Town Planning</div>
//     <div class="box_content">
//         <div>
//             <div class="d-flex align-items-center date">
//                 <i class="fas fa-calendar-alt"></i>
//                 June 3, 2020
//             </div>
//             <h4>What is a Clause 4.6 Variation?</h4>
//         </div>
//     </div>
// </a>
// </div>
// <div class="col-lg-4 col-md-6 mt_30">
// <a href="/#" class="box" style={{backgroundImage: `url(${ImgTwo})`}}>
//     <div class="category">NEWS</div>
//     <div class="box_content">
//         <div>
//             <div class="d-flex align-items-center date">
//                 <i class="fas fa-calendar-alt"></i>
//                 June 3, 2020
//             </div>
//             <h4>HomeBuilder Grant Eligibility</h4>
//         </div>
//     </div>
// </a>
// </div>
// <div class="col-lg-4 col-md-6 mt_30">
// <a href="/#" class="box" style={{backgroundImage: `url(${ImgThree})`}}>
//     <div class="category">NEWS</div>
//     <div class="box_content">
//         <div>
//             <div class="d-flex align-items-center date">
//                 <i class="fas fa-calendar-alt"></i>
//                 May 28, 2020
//             </div>
//             <h4>Priority Projects: Fast Tracked Developments</h4>
//         </div>
//     </div>
// </a>
// </div>

// </div>