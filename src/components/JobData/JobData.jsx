import React from 'react';
import './JobData.css'
import { BeakerIcon } from '@heroicons/react/24/solid'

const JobData = ({jobdata}) => {
  console.log(jobdata)
  const {name, title, locations,remote,onsite,salary,url,} = jobdata;
  return (
    <div className='card col p-4 gap-3'>
        <img className='img' src={url} alt="" />
        <h2 className=''>{title}</h2>
        <h4 className=''>{name}</h4>
        <p><span className='remote me-4'>{remote}</span><span className='remote'>{onsite}</span></p>
        <div>
          <div className="location">
          <BeakerIcon className="icon1"/> <span className='location me-3'>{locations}</span> 
          <span>{salary}</span>
          </div>
          <button className='button mt-3'>View Details</button>
        </div>
    </div>
  );
};

export default JobData;