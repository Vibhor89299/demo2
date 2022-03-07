import React from 'react';
import './possiblity.css';
import possibilityimage from '../../assets/possibility.png'

const Possiblity = () => {
  return (
    <div className='demo2__possiblity section__padding ' id='possiblity'>
    <div className='demo2__possiblity-image'>
      <img src={possibilityimage} alt="possiblity" />  
    </div>
    <div demo2__possiblity-content>
      <h4>Request early access to get started </h4>
      <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
      <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Startedv</h4>
    </div>
    </div>
  )
}

export default Possiblity