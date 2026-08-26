import React, { useState } from 'react'
import '../styles/Skills.css'

const Skills = ({skills, setSkills, skillset, setSkillset}) => {

    function addCurrentSkill(e) {
        setSkills(e.target.value)
    }

    function addSkill() {
        setSkillset([...skillset, skills])
    }

    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-card">
                <div className="skill-input-row">
                    <input onChange={addCurrentSkill} className="skillInput" type="text" placeholder="e.g. React" />
                    <button className="skill-add-button" onClick={addSkill}>Add</button>
                </div>
            </div>
        </section>
    )
}

export default Skills