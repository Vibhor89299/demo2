import React from 'react';
import './header.css';
import people from '../../assets/people.png' 
import ai from '../../assets/ai.png'

const Header = () => {
  return (
  <div className="demo2__header section__padding" id="home">
     
      <div className="demo2__header-content">
        <h1 className="gradient_text"> The Future is with us. Let's build it together </h1>
        <p>We are taking oders for your next dream project. Intrested in learning more ? Give us you email to mail to stay connected .</p>
          <div className="demo2__header-content__input" >
              <input type="email" placeholder="your email address" />
              <button type="button"> Get Started</button>
          </div>
          <div className="demo2__header-content__people">
            <img src={people} alt="people" />
            <p>1000+ people requested access within 24H</p>
          </div>
      </div>
          <div className="demo2__header-image">
            <img src={ai} alt="ai" />
          </div>
  </div>
  )
}

export default Header