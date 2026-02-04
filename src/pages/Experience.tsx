import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import WorkIcon from "@mui/icons-material/Work";
function Experience() {
  return (
     <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={ <SchoolIcon/>}
    >
      <h3 className='vertical-timeline-element-title'>KadPoly, Kaduna State NG</h3>
      <p>National Diploma</p>

    </VerticalTimelineElement>
     <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={ <SchoolIcon/>}
    >
      <h3 className='vertical-timeline-element-title'>Kaduna State University, Kaduna State, NG</h3>
      <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>
      <p>Computer Science</p>

    </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={ <WorkIcon/>}
    >
      <h3 className='vertical-timeline-element-title'>CSS Suleja, Niger State, NG</h3>
      <p>IT Specialist</p>

    </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2025 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={ <WorkIcon/>}
    >
      <h3 className='vertical-timeline-element-title'>TechValley, Kaduna State, NG</h3>
      <p>Front-End Developer</p>

    </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience