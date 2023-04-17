import React from "react";
import Job from "./Job";


function JobsContainer({jobs }) {
  return (
  
    <ul className="cards">
      {/* render a list of <job> components in here */}
      {jobs.map((job) => (
      <Job job={job} key={job.id} />
      ))}
    </ul>
  );
}

export default JobsContainer;
