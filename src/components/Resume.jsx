import React from "react";
import "../styles/Resume.css";

const Resume = ({ info, educationInfo, experienceInfo, skillset }) => {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        {/* Header */}
        <header className="resume-header">
          <div>
            {info.name ? (
              <h1 className="resume-name">{info.name}</h1>
            ) : (
              <h1 className="resume-name">Your Name</h1>
            )}
          </div>

          <div className="resume-contact">
            {info.email ? <p>{info.email}</p> : <p>your.email@example.com</p>}
            {info.phone ? <p>{info.phone}</p> : <p>+91 98765 43210</p>}
            {info.address ? <p>{info.address}</p> : <p>Address</p>}
            {info.city ? <p>{info.city}</p> : <p>City</p>}
            {info.zipcode ? <p>{info.zipcode}</p> : <p>Zipcode</p>}
          </div>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2>Profile Summary</h2>

          {info.summary ? (
            <p className="resume-summary">{info.summary}</p>
          ) : (
            <p className="resume-summary">
              Motivated developer with an interest in building clean, practical
              web applications. Comfortable working with JavaScript, React,
              Node.js and modern web technologies.
            </p>
          )}
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>

          {experienceInfo.map((experience) => {
            return (
              <div key={experience.id} className="resume-entry">
                <div className="entry-heading">
                  <div>
                    {experience.jobtitle ? (
                      <h3>{experience.jobtitle}</h3>
                    ) : (
                      <h3>Full Stack Developer</h3>
                    )}
                    {experience.employer ? (
                      <p className="entry-company">{experience.employer}</p>
                    ) : (
                      <p className="entry-company">Company Name</p>
                    )}
                  </div>

                  {experience.startdate || experience.enddate ? (
                    <div className="entry-date">
                      {" "}
                      {experience.startdate} — {experience.enddate}
                    </div>
                  ) : (
                    <div className="entry-date"> 2026-01-10 — 2026-08-20</div>
                  )}
                </div>

                {experience.city ? (
                  <p className="entry-location">{experience.city}</p>
                ) : (
                  <p className="entry-location">New Delhi, India</p>
                )}

                {experience.description ? (
                  <p className="entry-description"> {experience.description}</p>
                ) : (
                  <p className="entry-description">
                    {" "}
                    Worked on web applications using React, Node.js and MongoDB.
                    Built reusable components, REST APIs and responsive
                    interfaces.{" "}
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>

          {educationInfo.map((education) => {
            return (
              <div key={education.id} className="resume-entry">
                <div className="entry-heading">
                  <div>
                    {education.degree ? (
                      <h3>{education.degree}</h3>
                    ) : (
                      <h3>Master of Computer Applications</h3>
                    )}
                    {education.school ? (
                      <p className="entry-company">{education.school}</p>
                    ) : (
                      <p className="entry-company"> University / Institution</p>
                    )}
                  </div>

                  {education.startdate || education.enddate ? (
                    <div className="entry-date">
                      {" "}
                      {education.startdate} — {education.enddate}
                    </div>
                  ) : (
                    <div className="entry-date"> 2026-01-10 — 2026-08-20</div>
                  )}
                </div>

                {education.city ? (
                  <p className="entry-location">{education.city}</p>
                ) : (
                  <p className="entry-location">New Delhi, India</p>
                )}

                {education.description ? (
                  <p className="entry-description"> {education.description}</p>
                ) : (
                  <p className="entry-description">
                    {" "}
                    Coursework focused on software development, databases, data
                    structures and web technologies.
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Skills</h2>

          <div className="skill-list">
          {skillset.map((item, index) => (
            <span className="skill-tag" key={index}>
              {item}
            </span>
          ))}
          </div>
        </section>
      </div>
  </div>

  );
};

export default Resume;
