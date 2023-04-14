
import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import About from "./About";
import Contacts from "./Contacts";
import JobMenu from "./JobMenu";
import NewJobItem from "./NewJobItem";

function App() {
  const [jobs, setJobs] = useState([]);
	const [jobseeker, setJobseekers] = useState([]);
	const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
      .then((r) => r.json())
      .then((jobs) => setJobs(jobs));
  }, []);


  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<JobMenu menu={menu} filter={filter} handleSearch={handleSearch} />} />
          <Route path="/menu/new" element={<NewJobItem onAddToMenu={onAddToJob} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
  );
}

export default App;

