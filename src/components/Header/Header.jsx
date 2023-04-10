import React from 'react';
import img from '../../images/img1.jpg'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='d-md-flex'>
        <div className='w-50'>
            <h1 className='fw-bold'>One Step <br/> Closer To Your <br/> <span className='primary-color'> Dream Job</span></h1>
            <p><small>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all <br/> your job application from start to finish.</small></p>
            <button className='primary-bg'>Get Started</button>
        </div> 
        <div className='w-50'>
            <img className='w-100'  src={img} alt="" />
        </div>
    </div>
    </>
  );
};

export default Header;