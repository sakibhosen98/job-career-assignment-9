import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  // const [marksArray, setMarksArray] = useState();
  // useEffect( () => {
  //   fetch('assignments.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data.assignments))
  // }, [])

  const assignmentMarks = [
    {
      name: "Assi-One",
      number: 60,
    },
    {
      name: "Assi-Two",
      number: 60,
    },
    {
      name: "Assi-Three",
      number: 60,
    },
    {
      name: "Assi-Four",
      number: 60,
    },
    {
      name: "Assi-Five",
      number: 58,
    },
    {
      name: "Assi-Six",
      number: 55,
    },
    {
      name: "Assi-Seven",
      number: 60,
    },
    {
      name: "Assi-Eight",
      number: 60,
    },
  ];

  return (
    <div className="mt-5">
      <h3 className="text-center fw-bold mb-5">This is my assignment marks information chart.</h3>
      <AreaChart
       width={1000}
       height={300}
       data={assignmentMarks}
      >
       <Area dataKey="number" stroke="#8884d8"></Area>
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
      </AreaChart>
    </div>
  );
};

export default Statistics;
