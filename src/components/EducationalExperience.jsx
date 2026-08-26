import React, { useState } from 'react'
import '../styles/EducationalExperience.css'

const EducationalExperience = ({
    educationList,
    setEducationList
}) => {

    function addEducation() {
        setEducationList([
            ...educationList,
            educationList.length + 1
        ])
    }

    function deleteEducation() {
        if (educationList.length > 1) {
            setEducationList(prev => prev.slice(0, -1))
        }
    }

    return (
        <section className="education-section">

            <h2>Educational Experience</h2>

            <div className="education-list">

                {educationList.map((item, index) => (
                    <EducationSection
                        key={item}
                        number={index + 1}
                    />
                ))}

            </div>

            <div className="section-buttons">

                <button
                    className="add-button"
                    onClick={addEducation}
                >
                    + Add Section
                </button>

                <button
                    className="delete-button"
                    onClick={deleteEducation}
                >
                    − Delete
                </button>

            </div>

        </section>
    )
}


const EducationSection = ({ number }) => {

    const [info, setInfo] = useState({
        degree: '',
        school: '',
        city: '',
        startdate: '',
        enddate: '',
        description: ''
    })

    function handleChange(e) {
        const { name, value } = e.target

        setInfo({
            ...info,
            [name]: value
        })
    }

    return (
        <div className="education-card">

            <div className="education-card-header">
                <span>Education {number}</span>
            </div>

            <input
                value={info.degree}
                onChange={handleChange}
                name="degree"
                required
                type="text"
                placeholder="Degree"
            />

            <input
                value={info.school}
                onChange={handleChange}
                name="school"
                required
                type="text"
                placeholder="School / University"
            />

            <input
                value={info.city}
                onChange={handleChange}
                name="city"
                required
                type="text"
                placeholder="City / Town"
            />

            <div className="date-row">

                <input
                    value={info.startdate}
                    onChange={handleChange}
                    name="startdate"
                    type="date"
                />

                <input
                    value={info.enddate}
                    onChange={handleChange}
                    name="enddate"
                    type="date"
                />

            </div>

            <textarea
                value={info.description}
                onChange={handleChange}
                name="description"
                placeholder="Description (Optional)"
            />

        </div>
    )
}

export default EducationalExperience