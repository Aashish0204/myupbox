import React from 'react'
import '../component_css/Plans.css'
export const Plans = () => {
  return (
    <>
      <div className="separator">
        <h4>Pick your plan</h4>
        <img src={require('../images/underline.png')} alt="line" />
      </div>
      <div className="planbox">
        <div className="planitems" id='plan1'>
          <h4><b>Monthly</b></h4>
          <h3>$18/mo</h3>
          <button>FIND YOUR BOX</button>
        </div>
        <div className="planitems" id='plan2'>
          <h4><b>Yearly</b></h4>
          <h3>$15/mo</h3>
          <button>FIND YOUR BOX</button>
        </div>
      </div>
    </>
  )
}
