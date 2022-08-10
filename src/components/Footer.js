import React from 'react'
import '../component_css/Footer.css'
export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="heading">
                    <div className="logo">
                        <a className="navbar-brand" href="/#" id='logotext'>
                            <img src={require('../images/Logo.png')} alt="logo" width="56px" height="56px" className="d-inline-block align-text-center mx-3" />
                            UPBOX
                        </a>
                    </div>
                    <div className="company_logos">
                        <img src={require('../images/ig.png')} alt="ig" />
                        <img src={require('../images/fb.png')} alt="fb" />
                        <img src={require('../images/tw.png')} alt="tw" />
                        <img src={require('../images/sc.png')} alt="sc" />
                    </div>
                </div>
                <div className="elements">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <h5><b>UPBOX</b></h5>
                                <li>Upbox Bag</li>
                                <li>Upbox Box Platinum</li>
                                <li>Upbox Box VIP</li>
                                <li>Deals</li>
                                <li>Seasonal Items</li>
                                <li>Upbox Promise</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5><b>FIND US ON</b></h5>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>TikTok</li>
                                <li>SnapChat</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5><b>PRODUCT</b></h5>
                                <li>Get the App</li>
                                <li>Loyalty Programs</li>
                                <li>Affiliates</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5><b>HELP</b></h5>
                                <li>Returns</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                                <li>Community</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="elements1">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <h5><b>UPBOX</b></h5>
                                <li>Upbox Bag</li>
                                <li>Upbox Box Platinum</li>
                                <li>Upbox Box VIP</li>
                                <li>Deals</li>
                                <li>Seasonal Items</li>
                                <li>Upbox Promise</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5><b>FIND US ON</b></h5>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>TikTok</li>
                                <li>SnapChat</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <h5><b>PRODUCT</b></h5>
                                <li>Get the App</li>
                                <li>Loyalty Programs</li>
                                <li>Affiliates</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5><b>HELP</b></h5>
                                <li>Returns</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                                <li>Community</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="lastline">
                    <h6 className='text-center'>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use. Made by Ashish</h6>
                    <a href="/#">Terms</a>
                    <a href="/#">Privacy Policy</a>
                </div>
            </div>
        </>
    )
}
