import React from "react";
import "./Section.css";
import {
  BeakerIcon,
  BoltIcon,
  BookOpenIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

const Section = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Job Category List</h2>
      <p className="text-center mt-4">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
      <div className="d-md-flex justify-content-around gap-4 ">
        <div className="card p-4">
          <BeakerIcon className="icon" />
          <h5>Account & Finance</h5>
          <p>
            <small>300 Jobs Available</small>
          </p>
        </div>
        <div className="card p-4">
          <BookOpenIcon className="icon" />
          <h5>Creative Design</h5>
          <p>
            <small>100+ Jobs Available</small>
          </p>
        </div>
        <div className="card p-4">
          <BoltIcon className="icon" />
          <h5>Marketing & Sales</h5>
          <p>
            <small>150 Jobs Available</small>
          </p>
        </div>
        <div className="card p-4">
          <CogIcon className="icon" />
          <h5>Engineering Job</h5>
          <p>
            <small>224 Jobs Available</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
