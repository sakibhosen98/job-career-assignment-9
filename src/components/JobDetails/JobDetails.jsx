import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const jobId = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then(res => res.json())
      .then(data => setDetails(data.find((detail) => detail.id === jobId.id)));
  }, []);
  // useEffect(() => {
  //   const jobDetail = details.find((detail) => detail.id === jobId.id);
    
  // }, []);

  // console.log(jobDetail);

  return (
    <>
      <h3 className="text-center mt-5">Job Details</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
        <div>
          <p>
            <span className="fw-bold">
              Job Description: 
            </span> {details && details.job_Description}
          </p>
          <p>
            <span className="fw-bold">Job Responsibility: </span> {details && details.job_responsibility}
          </p>
          <p><span className="fw-bold">Educational Requirements: </span> {details && details.educational_requirments
}</p>
          <p><span className="fw-bold">Experiences: </span> {details && details.experience
}</p>
          <p></p>
        </div>
        <div className="job-details">
          <h5>Job Details</h5>
          <hr />
          <p>
            <span className="fw-bold">Salary: {details && details.salary} </span>
          </p>
          <div className="location">
            <MapPinIcon className="icon1" />
            <p>
              <span>Job Title: {details && details.title} </span>
            </p>
          </div>
          <h5>contact Information</h5>
          <hr />
          <div className="location">
            <PhoneIcon className="icon1" />
            <p>
              <span>Phone: {details && details.phone} </span>
            </p>
          </div>
          <div className="location">
            <EnvelopeIcon className="icon1" />
            <p>
              <span>Email: {details && details.email} </span>
            </p>
          </div>
          <div className="location">
            <MapPinIcon className="icon1" />
            <p>
              <span>Address: {details && details.address} </span>
            </p>
          </div>
          <button className="w-100 apply-btn">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
