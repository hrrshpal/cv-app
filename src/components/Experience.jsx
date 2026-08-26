import React from 'react'
import '../styles/Experience.css'

const Experience = ({
    experienceList,
    setExperienceList,
    experienceInfo,
    setExperienceInfo
}) => {

    function addExperience() {
        setExperienceList([
            ...experienceList,
            experienceList.length + 1
        ])

        setExperienceInfo([
            ...experienceInfo,
            {
                jobtitle: '',
                employer: '',
                city: '',
                startdate: '',
                enddate: '',
                description: ''
            }
        ])
    }


    function deleteExperience() {

        if (experienceList.length > 1) {

            setExperienceList(prev => prev.slice(0, -1))

            setExperienceInfo(prev => prev.slice(0, -1))
        }
    }


    return (
        <section className="experience-section">

            <h2>Work Experience</h2>

            <div className="experience-list">

                {experienceList.map((item, index) => (

                    <ExperienceSection
                        key={item}
                        number={index + 1}
                        index={index}
                        experienceInfo={experienceInfo}
                        setExperienceInfo={setExperienceInfo}
                    />

                ))}

            </div>


            <div className="section-buttons">

                <button
                    className="add-button"
                    onClick={addExperience}
                >
                    + Add Section
                </button>

                <button
                    className="delete-button"
                    onClick={deleteExperience}
                >
                    − Delete
                </button>

            </div>

        </section>
    )
}


const ExperienceSection = ({experienceInfo, setExperienceInfo, number, index }) => {

    function handleChange(e) {
        const { name, value } = e.target

        setExperienceInfo(prev => {
            const updatedExperience = [...prev]
            updatedExperience[index] = {
                ...updatedExperience[index],
                [name]: value
            }
            return updatedExperience
        })
    }


    const currentExperience = experienceInfo[index]


    return (
        <div className="experience-card">

            <div className="experience-card-header">
                <span>Experience {number}</span>
            </div>


            <input
                value={currentExperience.jobtitle}
                onChange={handleChange}
                name="jobtitle"
                required
                type="text"
                placeholder="Job Title"
            />


            <input
                value={currentExperience.employer}
                onChange={handleChange}
                name="employer"
                required
                type="text"
                placeholder="Employer"
            />


            <input
                value={currentExperience.city}
                onChange={handleChange}
                name="city"
                required
                type="text"
                placeholder="City / Town"
            />


            <div className="date-row">

                <input
                    value={currentExperience.startdate}
                    onChange={handleChange}
                    name="startdate"
                    required
                    type="date"
                />

                <input
                    value={currentExperience.enddate}
                    onChange={handleChange}
                    name="enddate"
                    required
                    type="date"
                />

            </div>


            <textarea
                value={currentExperience.description}
                onChange={handleChange}
                name="description"
                placeholder="Description (Optional)"
            />

        </div>
    )
}


export default Experience