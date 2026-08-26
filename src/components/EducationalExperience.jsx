import React, { useState } from 'react'
import '../styles/EducationalExperience.css'

const EducationalExperience = ({educationList, setEducationList, educationInfo, setEducationInfo }) => {
    function addEducation() {
        setEducationList([ ...educationList, educationList.length + 1 ])
        setEducationInfo([ ...educationInfo,
            {
                degree: '',
                school: '',
                city: '',
                startdate: '',
                enddate: '',
                description: ''
            }
        ])
    }

    function deleteEducation() {
        if (educationList.length > 1) {
            setEducationList(prev => prev.slice(0, -1))
            setEducationInfo(prev => prev.slice(0, -1))
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
                        index={index}
                        educationInfo={educationInfo}
                        setEducationInfo={setEducationInfo}
                    />
                ))}
            </div>

            <div className="section-buttons">
                <button className="add-button" onClick={addEducation}> + Add Section </button>
                <button className="delete-button" onClick={deleteEducation}> − Delete </button>
            </div>
        </section>
    )
}


const EducationSection = ({ educationInfo, setEducationInfo, number, index }) => {

    function handleChange(e) {
        const { name, value } = e.target

        setEducationInfo(prev => {
            const updatedExperience = [...prev]
            updatedExperience[index] = {
                ...updatedExperience[index],
                [name]: value
            }
            return updatedExperience
        })
    }

    const currentEducationExperience = educationInfo[index]

    return (
        <div className="education-card">
            <div className="education-card-header">
                <span>Education {number}</span>
            </div>

            <input value={currentEducationExperience.degree} onChange={handleChange} name="degree" required type="text" placeholder="Degree" />
            <input value={currentEducationExperience.school} onChange={handleChange} name="school" required type="text" placeholder="School / University"/>
            <input value={currentEducationExperience.city} onChange={handleChange} name="city" required type="text" placeholder="City / Town" />
            <div className="date-row">
                <input value={currentEducationExperience.startdate} onChange={handleChange} name="startdate" type="date" />
                <input value={currentEducationExperience.enddate} onChange={handleChange} name="enddate" type="date" />
            </div>
            <textarea value={currentEducationExperience.description} onChange={handleChange} name="description" placeholder="Description (Optional)"/>

        </div>
    )
}

export default EducationalExperience