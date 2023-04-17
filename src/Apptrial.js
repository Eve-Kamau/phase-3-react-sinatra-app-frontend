import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RandomButton from "./components/RandomButton";
import JobsContainer from "./components/JobsContainer";
import SearchBar from "./components/SearchBar";

function App() {
const [jobs, setJobs] = useState([]);
// const [employers, setEmployers] = useState([]);
// const [findJob, setFindJob] = useState("");
// const [filteredJobs, setFilteredJobs] = useState([]);
			       
useEffect(() => {				
  fetch("https://localhost:9292/jobs")				
  .then(response => response.json())				
  .then(data=> {				
  setJobs(data)							
  console.log("All Jobs Fetched and Found!")				
  })				
  .catch((err)=> console.log("Error fetching Jobs!"));				
}, []);		

// useEffect(() => {				
//   fetch("https://localhost:9292/employers")				
//   .then(response => response.json())				
//   .then(data=> {				
//   setEmployers(data)							
//   console.log("All Employers Fetched and Found!")				
//   })				
//   .catch((err)=> console.log("Error fetching Jobs!"));				
// }, []);		

// const addNewJob = (job) => {
//   setJobs([...jobs, job])
// }

// const addNewEmployer = (employer) => {
//   setEmployers([...employers, employer])
// }
function searchJobs(searchItem) {
 setFindJob(searchItem)
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
      <div>
      <Header />
      <SearchBar jobs={jobs} filterJob={filteredJobs} searchjobs={searchJobs}/>
      <RandomButton />
      <JobsContainer jobs={jobs} />
    </div>
  );
}

export default App;