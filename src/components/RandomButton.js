import React, { useState } from "react";
import { getRandomJob } from "../data/jobs";

function RandomButton(onAddRandomJob) {
  const [randomJobs, setRandomJobs] = useState([]);

  function handleClick() {
    const randomJob = getRandomJob();
      if (!randomJobs.includes(randomJob)) {
			setRandomJobs([...randomJobs, randomJob]);
			fetch("http://localhost:9292/jobs", {
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



//     const handleAddTrail = (newTrail) => {
//         fetch("http://localhost:9292/trails", {
//             method: 'POST',
//             headers: { 
//               "Content-Type": "application/json", 
//             },
//             body: JSON.stringify(newTrail),
//           })
//           .then(r => r.json())
//           .then((newTrail) => handleAddTrailToTrails(newTrail))
//     }

//     post '/trails' do
//     trail = Trail.create(
//       name: params[:name],
//       location: params[:location],
//       distance: params[:distance],
//       elevation_gain: params[:elevation_gain]
//     )
//     trail.to_json(include: :athletes)
//   end