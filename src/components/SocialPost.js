import React from 'react'
import '../component_css/SocialPost.css'

export const SocialPost = () => {
  return (
    <>
      <div className="socialpost">
        <h4 className='text-center'><b>Social Posts</b></h4>
        <div className="container">
          <div className="imgbox">
            <div className="images" id='img1'></div>
            <h5>How to rock the lip look that turns heads</h5>
          </div>
          <div className="imgbox">
            <div className="images" id='img2'></div>
            <h5>Find the perfect shade for the season</h5>
          </div>
          <div className="imgbox">
            <div className="images" id='img3'></div>
            <h5>The 5 eye shadow secrets you never knew</h5>
          </div>
          <div className="imgbox">
            <div className="images" id='img4'></div>
            <h5>The 5 eye shadow secrets you never knew</h5>
          </div>
        </div>
        <button id='followbtn'>FOLLOW US ON INSTAGRAM</button>
      </div>
    </>
  )
}
