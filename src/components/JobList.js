import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {

  return (
      <div className="ui column">
         <p> </p>
          CURRENT AVAILABLE JOBS
         <p> </p>

        <div className="ui card">
        {jobs.map((job) => (
      <JobCard job={job} key={job.id} />
        ))}
        </div>
      </div>
    );
}

export default JobList;



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