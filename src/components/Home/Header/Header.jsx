import React from 'react'
import { withPrefix, Link } from "gatsby"
import Logo from '../../../assets/img/logo.png'
import './Header.css'

function Header(props) {
    
    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: "active" } : {}
    }

    return (
        <div>
            <header class="d-flex align-items-center sticky">
                <div class="container-fluid">
                    <div class="row align-items-end">
                        <div class="col-12">
                            <h5><a href="/#">Consultant Portal</a> | Client Portal | Make Payment</h5>
                        </div>
                        <div class="col-lg-3 col-8 text-left">
                           
                        <a href="index.html"  aria-label="Redirect" ><img src={Logo} class="img-fluid" alt="" /></a>
            
                        </div>
                            <div class="col-lg-9 col-4">
                                <div class="d-flex align-items-center mt_20">               
                                    <ul id="menu">
                                        <li class="nav-item">
                                                <Link to="/"  activeClassName="nav-link active" getProps={isActive} {...props} >Home</Link>
                                            </li>                                        
                                            <li class="nav-item">
                                                <Link to="/Development/" activeClassName="nav-link active" getProps={isActive} {...props}>Development Application</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/SubDivisions/"  activeClassName="nav-link active" getProps={isActive} {...props}>SubDivisions</Link>
                                            </li> 
                                            <li class="nav-item">
                                                <Link to="/Rezonings/"  activeClassName="nav-link active" getProps={isActive} {...props}>Rezoning</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/Contact/"  activeClassName="nav-link active" getProps={isActive} {...props}>Contact</Link>
                                            </li> 
                                        </ul>
                                    <h2 class="d-none d-lg-block"><a href="tel:1300438232">1300 438 232 (24 hours)</a></h2>
                                </div>
                                {/* <!-- menu toggler --> */}
                                <div class="hamburger-menu">
                                    <span class="line-top"></span>
                                    <span class="line-center"></span>
                                    <span class="line-bottom"></span>
                                </div> 
                            </div>
                        </div>
                    </div>
            </header>
        </div>   
    )
}

export default Header



