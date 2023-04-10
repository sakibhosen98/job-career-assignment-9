import React from 'react';
import './JobDetails.css'
import { MapPinIcon, PhoneIcon,EnvelopeIcon  } from '@heroicons/react/24/solid'


const JobDetails = ({cart}) => {
  console.log(cart.contact_info)
  const {job_Description,job_responsibility,educational_requirments,experience,salary,title,phone,email,address} = cart;
  return (
    <>
      <div className='row row-cols-1 row-cols-md-2 g-4 mt-4'>
          <div>
              <p><span className='fw-bold'>Job Description:</span> {job_Description}</p>
              <p><span className='fw-bold'>Job Responsibility:  </span>{job_responsibility}</p>
              <p className='fw-bold'>Educational Requirements: </p>
              <p>{educational_requirments}</p>
              <p className='fw-bold'>Experiences: </p>
              <p>{experience}</p>
          </div>
          <div className='job-details'>
              <h5>Job Details</h5>
              <hr/>
              <p><span className='fw-bold'>Salary: </span>{salary}</p>
              <div className='location'>
              <MapPinIcon className="icon1"/>
              <p><span>Job Title: </span>{title}</p>
              </div>
              <h5>contact Information</h5>
              <hr/>
              <div className='location'>
              <PhoneIcon className="icon1"/>
              <p><span>Phone: </span>{phone}</p>
              </div>
              <div className='location'>
              <EnvelopeIcon className="icon1"/>
              <p><span>Email: </span>{email}</p>
              </div>
              <div className='location'>
              <MapPinIcon className="icon1"/>
              <p><span>Address: </span>{address}</p>
              </div>
              <button className='w-100 apply-btn'>Apply Now</button>
          </div>
      </div>
    </>
  );
};

export default JobDetails;