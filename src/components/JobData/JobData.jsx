import React from 'react';
import './JobData.css'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobData = ({job}) => {
  const {name, title, locations,remote,onsite,salary, url, id} = job;
  return (
    <div className='card col p-4 gap-3'>
        <img className='img' src={url} alt="" />
        <h2 className=''>{title}</h2>
        <h4 className=''>{name}</h4>
        <p><span className='remote me-4'>{remote}</span><span className='remote'>{onsite}</span></p>
        <div>
          <div className="location mb-3">
          <MapPinIcon className="icon1"/> <span className='location me-3'>{locations}</span> 
          <span>{salary}</span>
          </div>
          <Link className='button' to={`/job/${id}`}>View Details</Link>
        </div>
    </div>
  );
};

export default JobData;