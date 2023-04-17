import React, { useState } from "react";
import { getRandomJob } from "../data/jobs";

function RandomButton(onAddRandomJob) {
  const [randomJobs, setRandomJobs] = useState([]);

  function handleClick() {
    const randomJob = getRandomJob();
      if (!randomJobs.includes(randomJob)) {
			setRandomJobs([...randomJobs, randomJob]);
			fetch("http://localhost:8003/planeteers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(randomJob),
		  	})
				.then((res) => res.json())
				.then((newJob) => onAddRandomJob(newJob));
	    	} else {
			 alert(`Job ${randomJob.name} already in the page!!`);
		   }
	 }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-job">
        POST A JOB!
      </button>
    </div>
  );
}

export default RandomButton;
