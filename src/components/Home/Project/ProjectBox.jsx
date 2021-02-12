import React from "react"

function ProjectBox(props) {
    return (
        <div class="col-md-6 mt_30">
            <a href="/#" class="box" style={{ backgroundImage: `url(${props.img})` }}>
                <div class="category">{props.textOne}</div>
                <div class="box_content">
                    <div>
                        <div class="d-flex align-items-center date">
                            <i class="fas fa-calendar-alt"></i>
                            May 7, 2020
                        </div>
                        <h4>{props.textTwo}</h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectBox                            