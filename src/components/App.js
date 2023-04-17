import React, { useState, useEffect } from "react";
import logo from "./images/logo.jpg";
import SearchBar from "./SearchBar";
import JobList from "./JobList";
import RandomButton from "./RandomButton"

function App() {
const [jobs, setJobs] = useState([]);
const [findJob, setFindJob] = useState("");
const [filteredJobs, setFilteredJobs] = useState([]);

useEffect(() => {				
    fetch("http://localhost:9292/jobs")				
    .then(response => response.json())				
    .then(data=> {				
    setJobs(data)							
    console.log("All Jobs Fetched and Found!")				
    })				
    .catch((err)=> console.log("Error fetching Jobs!"));				
  }, []);		

  function searchJobs(searchJob) {
    setFindJob(searchJob)
     if (findJob !== ""){
     const filteredJobs = jobs.filter(job => {
         return job.name.toLowerCase().includes(findJob.toLowerCase());
     })
     setFilteredJobs(filteredJobs)
     } else {
     setFilteredJobs(jobs)
    }
  }

  return (
    <div className="centered">
      <img src={logo} alt="Logo" width="150" height="150" padding="100" id="main-header"/>
      <p>AFRO JOBS DASHBOARD</p>
      <p>This application allows jobseekers to see open job listings for possible recruitment where they can apply what interests one!</p>
       <SearchBar jobs={jobs} filterJob={filteredJobs} searchJobs={searchJobs}/> 
       <RandomButton/>
       <JobList jobs={jobs}/>  
     </div>
     )
  }
 export default App; 

//  function onApplyJob(newJob){
//     setJobs([...jobs, newJob]);
//    }

// const [pickedJob, setPickedJob] = useState([]);
//   function onDeleteJob(deleteJob){
//     setPickedJob(pickedJob.filter((job) => job.id !== deleteJob.id));
//   }

//   function retireJob(job){
//     fetch(`http://localhost:9292/jobs/${job.id}`, {
//         method: "DELETE"
//       })
//       .then(res => res.json())
//       .then(() => {
//       removeOneJob(job)
//       })