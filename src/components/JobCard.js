import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JobCard({ job }) {
	// const [job, setJob] = useState([]);
	// const { id } = useParams();

	// useEffect(() => {
	// 	fetch(`http://localhost:9292/jobs/${id}`)
	// 		.then((res) => res.json())
	// 		.then(data => {
  //      setJob(data)
  //     console.log("One Job is Fetched and Found!")		
  //   })	
	// 		.catch((err) => console.log("Error: ", err.message));
	// }, [id]);
	
  console.log(job)

  // function handleDelete(){
  //   fetch(`http://localhost:9292/jobs/${job.id}`, {
  //     method: "DELETE"
  //   })
  //   .then(res => res.json())
  //   .then(() => {
  //     onDeleteJob(job)
  //   })
  // }

  // function handleApply(){
  //   onApplyJob(job)
  // }

  return (
  
<div className="menu-container container-fluid">

			<div className="card" style={{ width: "30rem" }}>
				{/* <img src={item.poster_url} className="card-img-top" alt={item.name} /> */}
				<div className="card-body">
					<h5 className="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
						{job.job_title}
					</h5>
					<ul className="list-group list-group-flush">
						<p className="list-group-item">{job.job_description}</p>
						<p className="list-group-item">{job.job_type}</p>
						<p className="list-group-item">USD: {job.job_payrate}</p>
                        <p className="list-group-item">Location:{job.job_location}</p>
                        <p className="list-group-item">Industry: {job.job_industry}</p>
                        <p className="list-group-item">Employer_ID:{job.employer_id}</p>
					</ul>
					<div className="spec-buttons">
						<button className="btn btn-primary" onClick={""}>
							Apply
						</button>
						<button className="btn btn-danger" onClick={""}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobCard;
