import React from 'react'
import '../component_css/Work.css'
export const Work = () => {
  return (
    <>
      <div className="separator">
        <h4>How it works?</h4>
        <img src={require('../images/underline.png')} alt="line" />
      </div>
      <div className="work_container">
        <div className="works" id='work1'>
          <div className="images">
          <img src={require('../images/work1.png')} alt="work1" className='work' />
          </div>
          <div className="right">
            <h5><b>Setup your profile & preferences</b></h5>
            <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
          </div>
        </div>

        <div className="works" id='work2'>
          <div className="images">
            <img src={require('../images/2.png')} alt="2" className='number' />
            <img src={require('../images/art2.png')} alt="art2" className='art' />
            <img src={require('../images/Vector3.png')} alt="vector1" className="vector" />
            <img src={require('../images/box2.png')} alt="box" className='work' />
          </div>

          <div className="right">
            <h5><b>Review your custom box</b></h5>
            <p>Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
          </div>
        </div>
        <div className="works" id='work3'>
          <div className="images">
          <img src={require('../images/work3.png')} alt="work3" />
          <img src={require('../images/art3.png')} alt="art3"  className='art'/>
          </div>

          <div className="right">
            <h5><b>Try it on at home</b></h5>
            <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
          </div>
        </div>
        <div className="button">
          <button>TRY IT FOR YOURSELF &#62;</button>
        </div>
      </div>
    </>
  )
}
