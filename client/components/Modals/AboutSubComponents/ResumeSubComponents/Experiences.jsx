import React from 'react';
import Experience from './ExperienceSubComponents/Experience.jsx';

export default ({ experiences, className, changeActiveItem }) => (
  <div className={className} onClick={() => changeActiveItem('experience')}>
    <div className="resume-card-header">
      <div className="resume-card-name"><i className="fa fa-briefcase"></i> Experience</div>
    </div>
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {experiences.map(experience => (
          <Experience experience={experience} />
        ))}
      </div>
    </div>
  </div>
)