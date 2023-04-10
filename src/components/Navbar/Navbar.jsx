import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center mt-3 mb-3'>
        <h3>Job Career</h3>
        <div className='link d-flex gap-3'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        </div>
        <button className='primary-btn'>Star Applying</button>
    </nav>
  );
};

export default Navbar;