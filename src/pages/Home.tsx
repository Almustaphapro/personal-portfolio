import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h2>Hi, My Name is Almustapha</h2>
      <div className='prompt'>
        <p>A software developer with a passion for learning and creating.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ul className='list'>
        <li className='item'>
        <h2>Front-End</h2>
        <span>ReactJS, Redux, HTML, CSS, NPM, Ionic, BootStrap,
           MaterialUI, Yarn, TailwindCss, StyledComponentd </span>
        </li>
         <li className='item'>
        <h2>Back-End</h2>
        <span>NodeJs, ExpressJs</span>
        </li>
         <li className='item'>
        <h2>Languages</h2>
        <span>JavaScript, Java, TypeScript</span>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Home