import React,{ useState } from "react";  
import { useNavigate } from "react-router-dom"; 

const formStyle = {
  width: "70%",
  border: "grey solid 1px",
  borderRadius: "11px",
  padding: "70px"
};

function NewJobForm ({handleAddJob}){

const navigate = useNavigate();

const [formInput, setFormInput] = useState({
    job_title: "",
    job_description: "",
    job_type: "",
    job_postdate: "",
    job_payrate: "",
    job_location:"",
    job_industry: "",
    job_companyname: "",
  });

function handleSubmit(e) {
e.preventDefault();
fetch("http://localhost:9292/jobs/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formInput)
      })
      .then((res) => res.json())
      .then((data) => {
      handleAddJob(data)
setFormInput({
  job_title: "",
  job_description: "",
  job_type: "",
  job_postdate: "",
  job_payrate: "",
  job_location:"",
  job_industry: "",
  job_companyname: "", 
})
navigate(`/jobs/${data.id}`)
navigate(`/jobs/`)
      }
      )
    }

function handleChange(e){
    const name = e.target.name;
    let value = e.target.value;
    
    setFormInput({
    ...formInput,
    [name]: value, 
    });
    }

return (
  <>
		<div className="form-container container-fluid" style={formStyle}>

      <section>
       <h2>NEW JOB VACANCY ONBOARDING FORM</h2>&nbsp; &nbsp;
        <span><label htmlFor = "name"> Post your Job Vacancy Here!</label></span> &nbsp; &nbsp;
        <p></p>
        <span><label htmlFor = "name"> Let's get your next Hire! </label></span>
        <p></p>
      </section>

      <form className="row gy-2 gx-3 align-items-left"onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="menuName" className="form-label">
						Job Title
					</label>
                   <p></p>
					<input type="text" id="menuName" className="form-control" name="name" placeholder="Enter Job Title" onChange={handleChange} value={setFormInput.job_title} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuType" className="form-label">
						Job Description
					</label>
                    <p></p>
					<input type="text" id="menuName" className="form-control" name="name" placeholder="Enter Job Description" onChange={handleChange} value={setFormInput.job_description} />
				</div>
				
				<div className="mb-3">
					<label htmlFor="menuSize" className="form-label">
						Job Type
					</label>
                    <p></p>
					<select id="menuSize" name="size" className="form-select" defaultValue={"default"}  onChange={handleChange} value={setFormInput.job_type}>
                    <option value={"default"}> Choose an option </option>
                        <option>Permanent, Full-Time</option>
						<option>Permanent, Remote</option>
						<option>Contract</option>
                        <option>Shift</option>
                        <option>Internship</option>
					</select>
                    <p></p>
				</div>

				<div className="mb-3">
					<label htmlFor="menuPrice" className="form-label">
						Job Post Date
					</label>
                    <p></p>
					<input id="menuPrice" type="number" className="form-control" name="price" placeholder="ddmmyyyy" onChange={handleChange} value={setFormInput.job_postdate} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuDescription" className="form-label">
						Job Pay Range in USD
					</label>
                    <p></p>
					<input id="menuDescription" type="text" className="form-control" name="description" placeholder="Enter Min Pay - Max Pay Range" onChange={handleChange} value={setFormInput.job_payrate} />
				</div>

                <div className="mb-3">
					<label htmlFor="menuDescription" className="form-label">
						Job Location (City, Country)
					</label>
                    <p></p>
					<input id="menuDescription" type="text" className="form-control" name="description" placeholder="Enter Location" onChange={handleChange} value={setFormInput.job_location} />
				</div>

                <div className="mb-3">
					<label htmlFor="menuDescription" className="form-label">
                      Job Industry
					</label>
                    <p></p>
					<input id="menuDescription" type="text" className="form-control" name="description" placeholder="Enter Industry" onChange={handleChange} value={setFormInput.job_industry} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuImage" className="form-label">
						Company Name
					</label>
                    <p></p>
					<input id="menuImage" type="text" className="form-control" name="poster_url" placeholder="Enter Company Name" onChange={handleChange} value={setFormInput.job_companyname} />
				</div>

				<div className="col-auto">
					<button type="button" onClick={handleSubmit} className="btn btn-primary">
						SUBMIT
					</button>
				</div>
			</form>
		</div>
    </>
	);
}

export default NewJobForm; 



