import React, {useState } from "react";

function JobCard({ job, onDeleteJob }) {
	const [isDisabled, setDisabled] = useState(false);

	const searchStyle = {
		display: "flex",
		padding: "10px",
		justifyContent: "center",
		gap: "30px",
		};

	function handleApplyJob() {
		alert('Successful Application Submitted! Button Now Disabled!');
		setDisabled(true);
		}

	function handleDeleteJob(){
	  fetch(`http://localhost:9292/jobs/${job.id}`, {
	    method: "DELETE"
	  })
	  .then(res => res.json())
	  .then(() => {
	    onDeleteJob(job)
	  })
	}

  return (
  
<div className="menu-container container-fluid" style={searchStyle}>

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
                        <p className="list-group-item">Company Name:{job.job_companyname}</p>
					</ul>
					<div class="container">
						<button type="button" class="btn btn-success" onClick={handleApplyJob} disabled={isDisabled}>
							Apply Job
						</button>  &nbsp; &nbsp;
						{/* <button type="button" class="btn btn-info" onClick={""}>
							Amend Job
						</button> &nbsp; &nbsp; */}
						<button type="button" class="btn btn-danger" onClick={handleDeleteJob}>
							Delete Job
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobCard;

