
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <section className="about">
        <div className="heroText">
          <p className="eyebrow">
            Software developer • UI craft • problem solver
          </p>
          <h2>
            Hi, I&apos;m <span>Almustapha</span>
          </h2>
          <p className="tagline">
            I build elegant interfaces and purposeful web experiences that feel
            as good as they work.
          </p>

          <div className="ctaRow">
            <Link to="/projects" className="primaryButton">
              View Projects
            </Link>
            <a href="#skills" className="secondaryButton">
              Explore Skills
            </a>
          </div>

          <div className="prompt">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:almustapha@example.com" aria-label="Email">
              <EmailIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="sectionHeading">
          <p className="sectionLabel">Core strengths</p>
          <h1>Skills</h1>
        </div>

        <ul className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Ionic, Bootstrap, MaterialUI,
              Yarn, TailwindCSS, Styled Components
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJs</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
