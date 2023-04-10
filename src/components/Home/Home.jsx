import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import { useLoaderData } from 'react-router-dom';
import JobData from '../JobData/JobData';

const Home = () => {
const jobDatas = useLoaderData();

  return (
    <div className='container'>
      <Header></Header>
      <Section></Section>

      <section className='row row-cols-1 row-cols-md-2 g-4 mt-4'>
          {
            jobDatas.map(jobdata => <JobData
            key={jobdata.id}
            jobdata={jobdata}
            ></JobData>)
          }
      </section>
    </div>
  );
};

export default Home;