import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from 'react-icons/fa'; // Importing colorful icons
import "./about.css";

const About = () => {
    return (
      <div className="about-container ">
        <h1>About Me</h1>
        <p>A brief introduction about myself.</p>
  
        <div className="cards-container">
          <div className="card">
            <h2>Skills</h2>
            <ul>
              <li>
                <FaHtml5 style={{ color: '#E44D26', fontSize: '1.5rem', marginRight: '8px' }} /> HTML
              </li>
              <li>
                <FaCss3Alt style={{ color: '#1572B6', fontSize: '1.5rem', marginRight: '8px' }} /> CSS
              </li>
              <li>
                <FaJsSquare style={{ color: '#F7DF1E', fontSize: '1.5rem', marginRight: '8px' }} /> TypeScript
              </li>
              <li>
                <FaReact style={{ color: '#61DBFB', fontSize: '1.5rem', marginRight: '8px' }} /> Next.js
              </li>
              <li>
                <FaNode style={{ color: '#8CC84B', fontSize: '1.5rem', marginRight: '8px' }} /> Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="card">
            <h2 >Experience</h2>
            <p>Currently, I do not have any professional experience. I am actively seeking a good job where the environment is positive, and I can collaborate well with everyone to perform my tasks effectively.</p>
          </div>
          <div className="card">
            <h2>Hobbies</h2>
            <p>Coding, Reading, Traveling, Photography</p>
          </div>
        </div>
      </div>
    );
};

export default About;
