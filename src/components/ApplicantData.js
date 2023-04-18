import React, { useState, useEffect } from "react";
import Applicant from "./Applicant";

function ApplicantData () {
  const [applicants, setApplicants] = useState([]);
	
useEffect(() => {				
    fetch("http://localhost:9292/applicants")				
    .then(response => response.json())				
    .then(data=> {				
    setApplicants(data)							
    console.log("All Applicants Found!")				
    })				
    .catch((err)=> console.log("Error fetching Applicants!"));				
  }, []);		

  return (
  
    <ul className="cards">
      {applicants.map((applicant) => (
      <Applicant applicant={applicant} key={applicant.id} />
      ))}
    </ul>
  );
}

export default ApplicantData;
