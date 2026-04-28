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

    const [info, setInfo] = useState({
        degree: '',
        school: '',
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
            <input onChange={handleChange} name="degree" required type="text" className="degree" placeholder='Degree'/>
            <input onChange={handleChange} name="school" required type="text" className="school" placeholder='School/University' />
            <input onChange={handleChange} name="city" required type="text" className="city" placeholder='City/Town' />
            <input onChange={handleChange} name="startdate" type="date" className="startdate" />
            <input onChange={handleChange} name="enddate" type="date" className="enddate" />
            <textarea onChange={handleChange} name="description" type="textarea" className="description" placeholder='Description (Optional)' />
        </div>
    </>
}

export default EducationalExperience
