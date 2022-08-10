import React from 'react'
import '../component_css/Navbar.css'

export const Navbar = () => {

    return (
        <>
            <div id="topbar"></div>
            <nav className="navbar navbar-expand-lg bg-light navigation">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/#"  id='logotext'>
                        <img src={require('../images/Logo.png')} alt="logo" width="56px" height="56px" className="d-inline-block align-text-center mx-3" />
                        UPBOX
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">THIS MONTH</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">SKIN</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">HAIR</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">BATH</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">SALE</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn " id='loginbtn' type=""><span>LOG IN  &#62;</span></button>
                </div>
            </nav>
        </>
    )
}
