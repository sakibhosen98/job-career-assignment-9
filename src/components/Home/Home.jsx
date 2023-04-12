import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import { useLoaderData } from 'react-router-dom';
import JobData from '../JobData/JobData';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
const Jobs = useLoaderData();

  return (
    <div className='container'>
      <Header></Header>
      <Section></Section>
      
      <section className='row row-cols-1 row-cols-md-2 g-4 mt-4'>
          {
            Jobs?.map(job => <JobData
            key={job.id}
            job={job}
            ></JobData>)
          }

      </section>
    </div>
  );
};

export default Home;