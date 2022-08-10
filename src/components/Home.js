import React from 'react'
import '../component_css/Home.css'

export const Home = () => {
  return (
    <>
    <div className="hero ">
      <div className="hero_left">
        <h2>Look good without leaving your house.</h2>
        <p>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
        <button className="signupbtn">
        SIGN UP <b>&#62;</b>
      </button>
      </div>
      <div className="heroimg">
        <img src={require('../images/BOX1.png')} alt="box" id='box'/>
        <img src={require('../images/Marker.png')} alt="markers" className='marker'/>
      </div>
    </div>
    </>
  )
}
