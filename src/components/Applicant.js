import React, { useState } from "react";

function Applicant({applicant}) {
    const [isDisabled, setDisabled] = useState(false);
 
	const searchStyle = {
		display: "flex",
		padding: "10px",
		justifyContent: "center",
		gap: "30px",
		};

        function handleRecruit() {
            alert('Successful Candidate Selected!');
            setDisabled(true);
            }

            function handleReject() {
                alert('Candidate Not Picked!');
                setDisabled(true);
                }

  return (

<div className="menu-container container-fluid" style={searchStyle}>
			<div className="card" style={{ width: "30rem" }}>
				<div className="card-body">
					<h5 className="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
						APPLICANT NAME: {applicant.name}
					</h5>
					<ul className="list-group list-group-flush">
						<p className="list-group-item">PROFILE BIO: {applicant.bio}</p>
						<p className="list-group-item">LOCATION: {applicant.location}</p>
						<p className="list-group-item">EMAIL: {applicant.email}</p>
                        <p className="list-group-item">PHONE NUMBER:{applicant.phone}</p>
            
					</ul>
					<div class="container">
						<button type="button" class="btn btn-success" onClick={handleRecruit} disabled={isDisabled}>
							Recruit Candidate
						</button>  &nbsp; &nbsp;
				
						<button type="button" class="btn btn-danger" onClick={handleReject} disabled={isDisabled}>
							Reject Candidate
						</button>
					</div>
				</div>
			</div>
		</div>
);
}

export default Applicant;

