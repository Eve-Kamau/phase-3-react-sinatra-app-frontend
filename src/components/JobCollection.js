//CD1: SEE ALL S PROFILE FROM BOT CARDS (CONTAINER COMPONENT)

import React from 'react';


function JobCollection({ children }) {

  return (
    <div className="ui four column grid">
 

      <div className="row">
      {/* <h3>OUR JOB COLLECTION</h3> */}
    
      <div>
      {children} 
      </div>
    
    </div>
    </div>
  );
}

export default JobCollection;