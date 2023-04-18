import React from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function JobList({ jobs,onDeleteJob,filter,handleSearch  }) {
  const navigate = useNavigate();

  const searchStyle = {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    gap: "50px",
    };

    function handleClick() {
      navigate("/jobs/new");
      }

      function handleClickApp() {
        navigate("/applicants");
        }

  return (
    <>
     <div class="col text-center" style={searchStyle}>
     <button className="btn btn-custom" type="button" name="menu-button" onClick={handleClick}>
       POST A NEW JOB
     </button>
     </div>

     <div class="col text-center" style={searchStyle}>
     <button className="btn btn-custom" type="button" name="menu-button" onClick={handleClickApp}>
       APPLICANTS DATABASE
     </button>
     </div>
    
     <SearchBar filter={filter} handleSearch={handleSearch} />

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
      </>
    );
}

export default JobList;



