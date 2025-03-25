import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Coder", "Frontend Developer", "Web Designer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="About-Details">
          <div className="row">
            <div className="col-12">
              <span className="Name_Portion">Hi, I am a </span>
              <span className="Name">Ashutosh Mishra</span>
              <br />
              <span ref={typedRef} className="auto-type"></span>
            </div>
            <div className="col-12">
              <p className="details">
              Frontend Developer skilled in HTML, CSS, Bootstrap, JavaScript, and React.js, specializing in creating responsive and interactive web applications. Proficient in API integration and experienced in building multiple modern, user-focused web pages. Passionate about delivering clean, efficient, and scalable code for exceptional digital experiences.
              </p>
            </div>
            <div className="col-12">
              <button className="Resume_btn">Resume</button>
              <a href="#" className="mx-2">
                <i className="fa-brands fa-github" style={{ fontSize: "x-large", color: "yellow" }}></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin" style={{ fontSize: "x-large", color: "yellow" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
