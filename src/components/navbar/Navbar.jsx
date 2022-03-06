import React , { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

import { RiMenu3Line, RiCloseLine} from  'react-icons/ri';

const Menu =() => (
   <>
    <p> <a href="#home"> Home</a> </p>
    <p> <a href="#wgpt3"> What is GPT-3</a> </p>
    <p> <a href="#features"> Case Studies</a> </p>
    <p> <a href="#possiblity"> Open Ai</a> </p>
    <p> <a href="#blog"> Library</a> </p>
   </>
) 



const Navbar = () => {
  const [toggleMenu ,setToggleMenu] = useState(false);
  return (
    <div className="demo2__navbar">
      <div className="demo2__navbar-links">
        <div className="demo2__navbar-links_logo">
           <img src={logo}  alt="logo"/>
        </div>
         <div className="demo2__navbar-links_container"> 
          <Menu />
         </div>
      </div>
      <div className="demo2__navbar-sign">
        <p> Sign in</p>
        <button type="button"> Sign up</button>
      </div>
      <div className="demo2__navbar-menu">
      {toggleMenu
       ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
       :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) } />
      }
      {toggleMenu &&(
        <div className="demo2__navbar-menu_container scale-up-center">
          <div className="demo2__navbar-menu_container-links">
          <Menu />
          <div className="demo2__navbar-menu_container-links-sign">
        <p> Sign in</p>
        <button type="button"> Sign up</button>
      </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar