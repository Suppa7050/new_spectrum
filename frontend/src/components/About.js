import React from 'react';
import './about.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About New Spectrum</h2>
      <ul>
        <li>
          <span className="bullet">={'>'} </span>
          Welcome to New Spectrum, a platform that connects people with ideas and solutions.
        </li>
        <li>
          <span className="bullet">={'>'} </span>
          Our mission is to foster collaboration and innovation by providing a space where individuals can share their problem statements and ideas to find creative solutions.
        </li>
        <li>
          <span className="bullet">={'>'} </span>
          Whether you're facing a challenge and need help finding a solution or you have innovative ideas to contribute, New Spectrum is the place for you. Our community is made up of individuals from diverse backgrounds, each bringing their unique perspectives and expertise.
        </li>
        <li>
          <span className="bullet">={'>'} </span>
          By uploading your problem statement, you can tap into the collective wisdom of our community and receive valuable insights and solutions. Likewise, if you have a brilliant idea or solution, you can contribute by uploading it to existing problem statements and help others find the answers they're looking for.
        </li>
        <li>
          <span className="bullet">={'>'} </span>
          At New Spectrum, we believe in the power of collaboration and the potential of ideas to transform lives. Join us on this exciting journey and be a part of a vibrant community of problem solvers and innovators.
        </li>
        <li>
          <span className="bullet">={'>'} </span>
          Thank you for being a part of New Spectrum, and we look forward to seeing the amazing ideas and solutions that emerge from this platform!
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
