import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { MapPinIcon, PhoneIcon,EnvelopeIcon  } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {

 const jobId = useParams();
 const [details, setDetails] = useState([]);
 useEffect( () => {
    fetch('jobDatas.json')
    .then(res => res.json())
    .then(data => setDetails(data))
 },[]);

 const jobDetail = details.find(detail => detail.id === jobId.id);
 console.log(jobDetail)
  return (
    <>

      <h3 className='text-center mt-5'>Job Details</h3>
      <div className='row row-cols-1 row-cols-md-2 g-4 mt-4'>
          <div>
              <p><span className='fw-bold'>Job Description:{jobDetail && jobDetail.descriptions}</span> </p>
              <p><span className='fw-bold'>Job Responsibility:  </span></p>
              <p className='fw-bold'>Educational Requirements: </p>
              <p></p>
              <p className='fw-bold'>Experiences: </p>
              <p></p>
          </div>
          <div className='job-details'>
              <h5>Job Details</h5>
              <hr/>
              <p><span className='fw-bold'>Salary: </span></p>
              <div className='location'>
              <MapPinIcon className="icon1"/>
              <p><span>Job Title: </span></p>
              </div>
              <h5>contact Information</h5>
              <hr/>
              <div className='location'>
              <PhoneIcon className="icon1"/>
              <p><span>Phone: </span></p>
              </div>
              <div className='location'>
              <EnvelopeIcon className="icon1"/>
              <p><span>Email: </span></p>
              </div>
              <div className='location'>
              <MapPinIcon className="icon1"/>
              <p><span>Address: </span></p>
              </div>
              <button className='w-100 apply-btn'>Apply Now</button>
          </div>
      </div>
    </>
  );
};

export default JobDetails;