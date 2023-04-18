import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./images/logo.jpg";
import JobList from "./JobList";
import NewJobForm from "./NewJobForm";
import ApplicantData from "./ApplicantData";

function App() {
const [jobs, setJobs] = useState([]);
const [filter, setFilter] = useState("");

useEffect(() => {				
    fetch("http://localhost:9292/jobs")				
    .then(response => response.json())				
    .then(data=> {				
    setJobs(data)							
    console.log("All Jobs Fetched and Found!")				
    })				
    .catch((err)=> console.log("Error fetching Jobs!"));				
  }, []);		

  function onDeleteJob(deleted) {
    const updatedJobs = jobs.filter((item) => item.id !== deleted.id);
    setJobs(updatedJobs);
    }
   
  function handleSearch(event) {
    setFilter(event.target.value);
    }
    
    function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
    }

  return (
    <div className="centered">
      <img src={logo} alt="Logo" width="150" height="150" padding="100" id="main-header"/>
      <p>AFRO JOBS DASHBOARD</p>
      <p>This application allows jobseekers to see open job listings for possible recruitment where they can apply what interests one!</p>
     
      <Routes>
       <Route path="/jobs" element={<JobList jobs={jobs} onDeleteJob={onDeleteJob} filter={filter} handleSearch={handleSearch} />}/>  
       <Route path="/jobs/new" element={<NewJobForm handleAddJob={handleAddJob} />} />
       <Route path="/applicants" element={<ApplicantData />} />
      </Routes>
     </div>
     )
  }
 export default App; 

