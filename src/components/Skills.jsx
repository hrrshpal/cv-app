import React, { useState } from 'react'
import '../styles/Skills.css'

const Skills = ({skill,setSKill, currentSkill, setCurrentSkill }) => {

    function addCurrentSkill(e) {
        setCurrentSkill(e.target.value)
    }

    function addSkill() {

        if (!currentSkill.trim()) return

        setSkill([
            ...skill,
            currentSkill.trim()
        ])

        setCurrentSkill('')
    }

    return (
        <section className="skills-section">

            <h2>Skills</h2>

            <div className="skills-card">

                <div className="skill-input-row">

                    <input
                        value={currentSkill}
                        onChange={addCurrentSkill}
                        className="skillInput"
                        type="text"
                        placeholder="e.g. React"
                    />

                    <button
                        className="skill-add-button"
                        onClick={addSkill}
                    >
                        Add
                    </button>

                </div>

                <div className="skill-list">

                    {/* {skill.map((item, index) => (
                        <span className="skill-tag" key={index}>
                            {item}
                        </span>
                    ))} */}
                </div>
            </div>
        </section>
    )
}

export default Skills