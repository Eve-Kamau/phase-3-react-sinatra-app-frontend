import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {

  return (
      <div className="ui column">
         <p> </p>
          CURRENT AVAILABLE JOBS
         <p> </p>

        <div className="ui card">
        {jobs.map((job) => (
      <JobCard job={job} key={job.id} />
        ))}
        </div>
      </div>
    );
}

export default JobList;



