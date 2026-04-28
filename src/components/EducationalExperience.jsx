import React, { useState } from 'react'

const EducationalExperience = () => {
    const[educationList, setEducationList] = useState([1]);


    function addEducation(){
        setEducationList([...educationList, educationList.length+1])
    }

    function deleteEducation(){
        educationList.pop()
        setEducationList([...educationList])
    }

  return (
    <>
        <h2>Educational Experience</h2>
        {
            educationList.map(item => <EducationSection key={item} />)
        }
        <button onClick={addEducation}>Add Section (+)</button>
        <button onClick={deleteEducation}>Delete Section (-)</button>
    </>
  )
}

const EducationSection = () => {

    function handleChange(){}

    return <>
        <div>
            <input onChange={handleChange} name="degree" required type="text" className="degree" placeholder='e.g. Bachelor of Computer Applications'/>
            <input onChange={handleChange} name="school" required type="text" className="school" placeholder='e.g. Delhi University' />
            <input onChange={handleChange} name="city" required type="text" className="city" placeholder='e.g. New Delhi' />
            <input onChange={handleChange} name="startdate" type="date" className="startdate" />
            <input onChange={handleChange} name="enddate" type="date" className="enddate" />
            <textarea onChange={handleChange} name="description" type="textarea" className="description" placeholder='Description (Optional)' />
        </div>
    </>
}

export default EducationalExperience
