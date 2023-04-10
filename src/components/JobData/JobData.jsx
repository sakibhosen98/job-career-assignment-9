import React from 'react';
import './JobData.css'
import { MapPinIcon } from '@heroicons/react/24/solid'

const JobData = ({jobdata, handleAddToCart}) => {
  const {name, title, locations,remote,onsite,salary,url,} = jobdata;
  return (
    <div className='card col p-4 gap-3'>
        <img className='img' src={url} alt="" />
        <h2 className=''>{title}</h2>
        <h4 className=''>{name}</h4>
        <p><span className='remote me-4'>{remote}</span><span className='remote'>{onsite}</span></p>
        <div>
          <div className="location">
          <MapPinIcon className="icon1"/> <span className='location me-3'>{locations}</span> 
          <span>{salary}</span>
          </div>
          <button onClick={() => handleAddToCart(jobdata)} className='button mt-3'>View Details</button>
        </div>
    </div>
  );
};

export default JobData;