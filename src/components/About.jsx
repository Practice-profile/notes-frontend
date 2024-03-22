import React from 'react';
// import './about.css';
import Me from '../assets/me.png';
import { FaPython } from 'react-icons/fa';
import { BsDatabaseAdd } from 'react-icons/bs';
import { TbBrandNodejs } from 'react-icons/tb'; // Replacing TbBrandNodejs with BsNode

const About = () => {
  return (
    <div id='about'>
      <h5 className='text-center mt-4 text-body-secondary'>About The Developer</h5>
      <h1 className="about-heading mb-2 text-center">Varun Parihar</h1>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center  ">
            <img src={Me} alt="My pic" style={{ maxWidth: "80%", maxHeight: "80%" }} />
          </div>
          <div className="col-lg-6 my-5 py-3 ">
            <div className="row mt-3">
              <div className="col-lg-4 py-2 bg-body-tertiary" >
                <div className="about__card text-center">
                  <TbBrandNodejs className='about__icons' />
                  <h5>Fullstack Development</h5>
                </div>
              </div>
              <div className="col-lg-4 px-4 py-2">
                <div className="about__card text-center">
                  <FaPython className='about__icons' />
                  <h5>Data Science and ML</h5>
                </div>
              </div>
              <div className="col-lg-4 py-2 bg-body-tertiary">
                <div className="about__card text-center">
                  <BsDatabaseAdd className='about__icons' />
                  <h5>Software Development</h5>
                </div>
              </div>
            </div>

            <p className="text-muted mt-3">Hi! I'm a freshly graduated computer science engineer with a strong foundation in web development, data science, and machine learning. My knowledge encompasses core concepts of data structures and algorithms, as well as a sound knowledge of RDBMS. Proficient in programming languages like C++, Python, and JavaScript, I'm dedicated to creating innovative solutions and solving complex problems. With a commitment to continuous learning, I'm excited to contribute to cutting-edge projects and collaborate with like-minded individuals.</p>
            <a href="https://varun-parihar.netlify.app/#contact" rel="noreferrer" target='_blank' className="btn btn-primary">Let's Talk</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;

    
