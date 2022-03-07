import React from 'react';
import './App.css';

import {  Brand, CTA, Navbar } from './components';
import{ Blog , Footer , Header , Possiblity, Whatdemo2 ,Features }  from './containers'

const App = () => {
    return (  
     <div className='App'>
       <div className='gradient_bg'>
         <Navbar />
         <Header/>
       </div>
       <Brand/>
       <Whatdemo2/>
       <Features/>
       <Possiblity/>
       <CTA/>
       <Blog/>
       <Footer/>
     </div>

    );
}
  export default App