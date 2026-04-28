import React, { useState } from 'react'

const Experience = () => {
    const[experienceList, setExperienceList] = useState([1]);


    function addExperience(){
        setExperienceList([...experienceList, experienceList.length+1])
    }

    function deleteExperience(){
        experienceList.pop()
        setExperienceList([...experienceList])
    }

  return (
    <>
        <h2>Work Experience</h2>
        {
            experienceList.map(item => <ExperienceSection key={item} />)
        }
        <button onClick={addExperience}>Add Section (+)</button>
        <button onClick={deleteExperience}>Delete Section (-)</button>
    </>
  )
}

const ExperienceSection = () => {

    const [info, setInfo] = useState({
        jobtitle: '',
        employer: '',
        city: '',
        startdate: '',
        enddate: '',
        description:''
    })

    function handleChange(e){
        const {name, value} = e.target
        const newObj = {...info}
        newObj[name] = value
        setInfo(newObj)
    }


    return <>
        <div>
            <input onChange={handleChange} name="jobtitle" required type="text" className="jobtitle" placeholder='Job Title'/>
            <input onChange={handleChange} name="employer" required type="text" className="employer" placeholder='Employer' />
            <input onChange={handleChange} name="city" required type="text" className="city" placeholder='City/Town' />
            <input onChange={handleChange} name="startdate" required type="date" className="startdate" />
            <input onChange={handleChange} name="enddate" required type="date" className="enddate" />
            <textarea onChange={handleChange} name="description" type="textarea" className="description" placeholder='Description (Optional)' />
        </div>
    </>
}

export default Experience
