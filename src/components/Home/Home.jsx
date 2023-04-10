import React, { useState } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import { useLoaderData } from 'react-router-dom';
import JobData from '../JobData/JobData';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
const jobDatas = useLoaderData();
const [cart, setCart] = useState([]);

const handleAddToCart = jobdata => {
  setCart(jobdata)
}

  return (
    <div className='container'>
      <Header></Header>
      <Section></Section>
      
      <JobDetails 
        key={cart.id}
        cart={cart}
      ></JobDetails>
      <section className='row row-cols-1 row-cols-md-2 g-4 mt-4'>
          {
            jobDatas.map(jobdata => <JobData
            key={jobdata.id}
            jobdata={jobdata}
            handleAddToCart={handleAddToCart}
            ></JobData>)
          }
      </section>
    </div>
  );
};

export default Home;