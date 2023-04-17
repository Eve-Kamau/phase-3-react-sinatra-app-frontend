import React from "react";
import JobCard from "./JobCard";

function SearchBar({ filterJob,searchJobs }) {

  function handleChangeSort(e){
    filterJob(e.target.checked)
  }

  return (
    <>
    <div className="search">
    <input 
     type="text" 
     name="search" 
     placeholder="Find a Job..." 
     onChange={(e) => searchJobs(e.target.value)}
     />
    </div>

    <div>
    {filterJob.map((job) => (
      <JobCard job={job} key={job.id}/>
      ))}
     </div>
    </>
  );
}

export default SearchBar;
